import Vue from 'vue'
import VueRouter from 'vue-router'
import Addinf from '../views/Addinf.vue'
import Yimiao from '../views/Yimiao.vue'
import { Button } from 'mint-ui';
import { Popup } from 'vant';   //弹出框

Vue.use(VueRouter)
Vue.use(Vuex);
Vue.component(Button.name, Button);
Vue.use(Popup); //弹出框

const routes = [
  {
    path: '/',
    name: 'Addinf',
    component: Addinf
  },
  {
    path: '/yimiao',
    name: 'Yimiao',
    component: Yimiao
  },
  {
      path: '/home',
      name: 'Home',
      component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
