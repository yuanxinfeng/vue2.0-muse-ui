import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource  from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Count from './views/Count'

import Home from './components/Home'
import Store from './components/Store'
import Data from './components/Data'
import Me from './components/Me'

const store = new Vuex.Store({
  state:{
    data:[],
    isLogin:false
  }
})
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/component/home', component: Home },
  { path: '/component/store', component: Store },
  { path: '/component/data', component: Data },
  { path: '/component/me', component: Me },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
