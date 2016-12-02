<template lang="html">
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <mu-list-item disableRipple :title="item.data.albumname"/>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
export default {
  name:'count',
  data () {
    return {
      list:[],
      num: 5,
      countRefresh:0,//记录刷新次数
      countLoadMore:0,//记录加载次数
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null
    }

  },
  mounted () {//http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg////http://youthclubtest.digilinx.net.cn/script/0001/process_inc_gzh.php
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
      const list = response.data.songlist
      for (var i = 0; i < 20; i++) {
        this.list.push(list[i])
      }
      // this.list = response.data.songlist
      // console.log('成功'+JSON.stringify(response.data));
    }, (response) => {
      console.log('失败：'+JSON.stringify(response));
    });
    this.trigger = this.$el
    this.scroller = this.$el
  },
  methods: {
    refresh:function() {
      // this.loading = false
      this.refreshing = true
      setTimeout(() => {
        // const list = []
        // ++this.countRefresh
        // for (let i = this.num; i < this.num + 15; i++) {
        //   list.push('这是我第' + (this.countRefresh) + '次下拉刷新！')
        // }
        // this.list = list
        // this.num += 10
        // this.loading = true
        this.refreshing = false
      }, 1000)
    },
    loadMore:function() {
      this.loading = true
      // this.refreshing = false
      // ++this.countLoadMore
      setTimeout(() => {
      //   for (let i = this.num; i < this.num + 1; i++) {
      //     this.list.push('这是我第' + (this.countLoadMore) + '次上拉加载！')
      //   }
      //   this.num += 10
        this.loading = false
        // this.refreshing = true
      }, 1000)
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
  margin-bottom: 56px;
}
</style>
