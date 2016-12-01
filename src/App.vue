<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <Count></Count>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/Header'
import Count from './views/Count'
import Footer from './views/Footer'
export default {
  name: 'app',
  data(){
    return{
      bottomNav:'Music'
    }
  },
  components: {
    Header,
    Count,
    Footer
  }
}
</script>

<style>
#app {
  background-color: #eee;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
