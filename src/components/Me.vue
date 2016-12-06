<template lang="html">
  <div class="imgSpinning">
    <h1>这是我的页面</h1>
  </div>
</template>

<script>
// import SongInfo from ''
export default {
}
</script>

<style lang="css">
.imgSpinning{
    -webkit-animation:run 2s linear 0s infinite;
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
