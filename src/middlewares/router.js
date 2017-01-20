/**
 * Created by Leasong on 2017/1/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Regist from '../components/openProcess/Regist'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Regist
    }
  ]
})
