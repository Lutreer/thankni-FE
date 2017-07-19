import Vue from 'vue'
import VueRouter from 'vue-router'

import openProcess from '../components/openProcess/index'
import Rooms from '../components/openProcess/Rooms'
import RoomDetail from '../components/openProcess/RoomDetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/regist',
      component: openProcess,
      children: [
        {
          path: 'first',
          component: Rooms
        },
        {
          path: 'second',
          component: RoomDetail
        }
      ]
    }
  ]
})
