<template lang="html">
  <div class="demo-refresh-container imgSpinning">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="(item,index) in list">
        <!-- <mu-list-item disableRipple :title="item.data.albumname"/>
        <mu-divider/> -->
        <mu-list-item :title="item.data.albumname" @click="click(index)">
          <mu-avatar :src="'http://y.gtimg.cn/music/photo_new/T002R300x300M000'+item.data.albummid+'.jpg?max_age=2592000'" slot="leftAvatar"/>
          <!-- <mu-icon value="chat_bubble" slot="right"/> -->
        </mu-list-item>
      </template>
    </mu-list>
    <div class="play imgSpinning" v-show="isplay">
      <router-link to="/component/songInfo">
        <mu-list-item :title="dataName" >
            <mu-avatar class="imgSpinning" :src="dataimg" slot="leftAvatar"/>
            <!-- <img v-bind:src="dataimg" class="imgSpinning" style="width:40px;height:40px"> -->
          <audio v-bind:src="dataUrl" autoplay="autoplay"></audio>
        </mu-list-item>
      </router-link>
    </div>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
export default {
  name:'count',
  data () {
    return {
      list:[],
      num: 20,
      songid:'',
      dataUrl:'',
      dataimg:'',
      dataName:'',
      isplay:false,
      countRefresh:0,//记录刷新次数
      countLoadMore:0,//记录加载次数
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null
    }

  },
  computed: {
    count () {
      return this.$store.state.data
    }
  },
  mounted () {//http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg////http://youthclubtest.digilinx.net.cn/script/0001/process_inc_gzh.php
    // console.log(this.count.length)
    // this.list.push(this.$store.state.data)
    if (this.count.length !== 0 ) {
      for (var i = 0; i < 20; i++) {
        this.list.push(this.count[i])
      }
    }else {
      this.$http.jsonp('http://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', {
        params: {
          g_tk:5381,
          uin:0,
          format:'json',
          inCharset:'utf-8',
          outCharset:'utf-8',
          notice:0,
          platform:'h5',
          needNewCode:1,
          tpl:3,
          page:'detail',
          type:'top',
          topid:26,
          _: new Date().getTime()
        },
        jsonp: 'jsonpCallback'}
      ).then((response) => {
        this.$store.state.data = response.data.songlist
        const list = response.data.songlist
        for (var i = 0; i < 20; i++) {
          this.list.push(list[i])
        }
        // this.list = response.data.songlist
        // console.log('成功'+JSON.stringify(response.data));
      }, (response) => {
        console.log('失败：'+JSON.stringify(response));
      });
    }

    this.trigger = this.$el
    this.scroller = this.$el
  },
  methods: {
    refresh:function() {
      // this.loading = false
      this.refreshing = true
      setTimeout(() => {
        const list = []
        // ++this.countRefresh
        for (let i = 0; i < 20; i++) {
          list.push(this.count[i])
        }
        this.list = list
        this.refreshing = false
      }, 1000)
    },
    loadMore:function() {
      this.loading = true
      // this.refreshing = false
      // ++this.countLoadMore
      setTimeout(() => {
        for (let i = this.num; i < this.num + 1; i++) {
          this.list.push(this.count[i])
        }
        this.num += 1
        this.loading = false
        // this.refreshing = true
      }, 1000)
    },
    click(index){
      this.isplay = true
      this.dataName = this.list[index].data.singer[0].name +'-'+ this.list[index].data.albumname
      this.dataUrl = 'http://ws.stream.qqmusic.qq.com//' + this.list[index].data.songid + '.m4a?fromtag=46'
      this.dataimg = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000'+this.list[index].data.albummid+'.jpg?max_age=2592000'

    }
  }
}
</script>

<style lang="css">
.demo-refresh-container{
  /*width: 256px;*/
  height: 600px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
  position: relative;
  user-select: none;
  margin-bottom: 112px;
}
.play{
  background-color: #eee;
  position: fixed;
  left: 0;
  bottom: 56px;
  width: 100%;
}
.imgSpinning{
    -webkit-animation:run 2s linear 0s infinite
}
.imgSpinning:hover{
    -webkit-animation-play-state:paused;
}
@-webkit-keyframes run{
  from{
      -webkit-transform:rotate(0deg);
      }
  to{
      -webkit-transform:rotate(360deg);
  }
}

</style>
