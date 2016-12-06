<!-- <template lang="html">
  <div class="">
    <h1>这是home页面</h1>
  </div>
</template> -->
<template lang="html">
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <!-- <mu-list-item disableRipple :title="item.data.albumname"/>
        <mu-divider/> -->
        <mu-list-item :title="item.data.albumname" @click="click">
          <mu-avatar  slot="leftAvatar"/>
          <!-- <mu-icon value="chat_bubble" slot="right"/> -->
        </mu-list-item>
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
      num: 20,
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
  mounted(){
    // console.log(this.count);
    const arr = this.count
    // console.log(arr.length);
    if (arr.length !== 0) {
      for (let i = 0; i < 20; i++) {
        console.log(JSON.stringify(arr[i]));
        this.list.push(arr[i])
      }
    }
    this.trigger = this.$el
    this.scroller = this.$el
  },
  methods: {
    refresh:function() {
      // this.loading = false
      console.log('走了？');
      this.refreshing = true
      setTimeout(() => {
        const list = []
        // ++this.countRefresh
        for (let i = 0; i < 20; i++) {
          list.push(this.count[i])
        }
        this.list = list
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
        for (let i = this.num; i < this.num + 1; i++) {
          console.log(JSON.stringify(this.count[i]))
          this.list.push(this.count[i])
        }
        this.num += 1
        this.loading = false
        // this.refreshing = true
      }, 1000)
    },
    click(){
      console.log('aaa');
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
