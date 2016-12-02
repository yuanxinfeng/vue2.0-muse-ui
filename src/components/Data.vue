<template lang="html">
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <mu-list-item disableRipple :title="item.k"/>
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
    this.$http.post('http://japi.juhe.cn/funny/type.from?key=fcfcab0fd0f026de5906b9bd219ad3b1'
    // ,{
      // params: {
        // g_tk: 5381,
        // loginUin: 0,
        // hostUin: 0,
        // format: 'jsonp',
        // inCharset: 'utf8',
        // outCharset: 'utf-8',
        // notice: 0,
        // platform: 'yqq',
        // needNewCode: 0
      // },
      // jsonp: 'jsonpCallback'}
    ).then((response) => {
      this.list = response.body.data.hotkey
      // console.log('成功'+JSON.stringify(response));
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
        const list = []
        ++this.countRefresh
        for (let i = this.num; i < this.num + 15; i++) {
          list.push('这是我第' + (this.countRefresh) + '次下拉刷新！')
        }
        this.list = list
        this.num += 10
        // this.loading = true
        this.refreshing = false
      }, 1000)
    },
    loadMore:function() {
      this.loading = true
      // this.refreshing = false
      ++this.countLoadMore
      setTimeout(() => {
        for (let i = this.num; i < this.num + 1; i++) {
          this.list.push('这是我第' + (this.countLoadMore) + '次上拉加载！')
        }
        this.num += 10
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
