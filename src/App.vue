<template>
  <div id="app">
    <Header v-if="islogin"></Header>
    <div class="body" v-if="islogin">
      <router-view></router-view>
    </div>
    <Footer v-if="islogin"></Footer>
    <!-- 先把登录写这里后期组件 -->
    <div class="login" v-if="islogin1">
      <mu-text-field label="帐号" hintText="请输入用户名" v-model="input1" type="text" labelFloat/><br/>
      <mu-text-field label="密码" hintText="请输入密码" v-model="input2" errorText="" type="password" labelFloat/>
      <!-- <mu-checkbox label="记住用户" class="demo-checkbox"/> <br/> -->
      <mu-raised-button label="登录" class="demo-raised-button" @click="login" primary/>
      <mu-raised-button label="注册" class="demo-raised-button" @click="res" primary/>
      <mu-dialog :open="dialog" title="提示">
        {{text}}
        <mu-flat-button label="确定" slot="actions" primary @click="close"/>
      </mu-dialog>
    </div>
  </div>
</template>

<script>
import Header from './views/Header'
import Count from './views/Count'
import Footer from './views/Footer'
import Hello from './components/Hello'
import SongInfo from './components/SongInfo'

export default {
  name: 'app',
  data(){
    return{
      bottomNav:'Music',
      islogin1:true,
      islogin:false,
      text:'请输入用户名',
      input1:'',
      input2:'',
      dialog: false
    }
  },
  mounted(){
    console.log(this.$store.state.isLogin);
  },
  computed:{
    isLoginoff(){
      return this.$store.state.isLogin
    }
  },
  components: {
    Header,
    Count,
    Footer,
    Hello,
    SongInfo
  },
  methods:{
    login(){
      console.log('登录');
      if (this.input1==='123' && this.input2==='123') {
        this.islogin1 = false
        this.islogin = true
      }else {
        !(this.input1 === '123')?this.text="请输入正确用户名":(!(this.input2==='123')?this.text="密码不正确":this.text="请输入密码")
        this.dialog = true
      }

    },
    res(){
      console.log('注册');
    },
    close () {
      this.dialog = false
    }
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
.body {
  margin-top: 56px
}
.login {
  background-color: #ffffff;
  margin-top: 120px;
  text-align: center;
}
</style>
