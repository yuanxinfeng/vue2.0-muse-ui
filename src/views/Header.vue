<template lang="html">
  <mu-appbar title="header" class="back">
    <!-- 左边按钮 -->
    <mu-icon-button icon='header' slot="left" @click="toggle(true)"/>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="" v-html="header"/>
        <mu-list-item title="" v-html="header"/>
        <mu-list-item title="" v-html="header"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
    <!-- 右边按钮 -->
    <mu-icon-button icon='h' slot="right" ref="button" @click="leftBtn"/>
    <mu-popover :trigger="trigger" :open="leftOpen" @close="handleClose">
      <mu-menu>
        <mu-menu-item title="Refresh" />
        <mu-menu-item title="Send feedback" />
        <mu-menu-item title="Settings" />
        <mu-menu-item title="Help" />
        <mu-menu-item title="Sign out" />
      </mu-menu>
    </mu-popover>
  </mu-appbar>
</template>

<script>
export default {
  name:'header',
  data(){
    return{
      open: false,
      leftOpen: false,
      docked: true,
      trigger: null,
      header:'这是一个draweb！'
    }
  },
  mounted(){
    this.trigger = this.$refs.button.$el
  },
  methods:{
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    leftBtn () {
      console.log('走了？');
      this.leftOpen = !this.leftOpen
    },
    handleClose (e) {
     this.open = false
   }
  }
}
</script>

<style lang="css">
.back{
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
