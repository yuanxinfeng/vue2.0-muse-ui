<template lang="html">
  <mu-paper class="footer">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="movies"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music"/>
      <mu-bottom-nav-item value="books" title="Books" icon="books"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="pictures"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  name:'footer',
  data(){
    return{
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style lang="css">
.footer{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
