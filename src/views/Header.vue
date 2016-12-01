<template lang="html">
  <mu-appbar title="header">
    <mu-icon-button icon='header' slot="left"/>
    <mu-icon-button icon='h' slot="right"/>
  </mu-appbar>
</template>

<script>
export default {
  name:'header',
  data(){
    return{
      header:'这是一个header！'
    }
  }
}
</script>

<style lang="css">
.back{
  background-color: #fff
}
</style>
