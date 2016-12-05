<!-- <template lang="html">
  <div class="">
    <h1>这是home页面</h1>
  </div>
</template> -->
<template lang="html">
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in this.$store.state.data">
        <mu-list-item disableRipple :title="item.data.albumname"/>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
export default {
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
  mounted(){
    // console.log(JSON.stringify(this.$store.state.data))
    // const list = JSON.stringify(this.$store.state.data)
    // for (var i = 0; i < 20; i++) {
    //   this.list.push(list[i])
    // }
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
