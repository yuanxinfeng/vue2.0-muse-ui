<template lang="html">
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <mu-list-item disableRipple :title="item"/>
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
    const list = []
    for (let i = 0; i < 20; i++) {
      list.push('这是我初次加载')
    }
    return {
      list,
      num: 5,
      countRefresh:0,//记录刷新次数
      countLoadMore:0,//记录加载次数
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null
    }
  },
  mounted () {
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
