<template lang="html">
  <mu-paper class="footer">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <router-link to="/component/home"><mu-bottom-nav-item value="home" title="首页" icon="home"/></router-link>
      <router-link to="/component/store"><mu-bottom-nav-item value="store" title="门店" icon="store"/></router-link>
      <router-link to="/component/data"><mu-bottom-nav-item value="data" title="数据" icon="data"/></router-link>
      <router-link to="/component/me"><mu-bottom-nav-item value="me" title="我" icon="me"/></router-link>
      <!-- v-link='{ path: '/component/home'}' -->
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  name:'footer',
  data(){
    return{
      bottomNav: 'home'
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
