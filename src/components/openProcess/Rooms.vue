<template>
  <div>
    <grid>
      <grid-item label="Grid" v-for="i in 9">
        <div class="inner-logo"></div>
      </grid-item>
    </grid>
    <XButton type="primary" :text="buttonText" @click.native="newStep"></XButton>
    <router-view></router-view>
  </div>
</template>

<script>
import { XButton, Grid, GridItem } from 'vux'
import Router from '../../middlewares/router'

export default {
  components: {
    XButton,
    Grid,
    GridItem
  },
  data () {
    return {
      // 改变这里并不会出发 hot-reload，这里是initial state
      buttonText: 'Hello World!'
    }
  },
  methods: {
    newStep () {
      Router.push('/list/item/123')
      console.log('ssss')
    }
  }
}
</script>

<style>
.inner-logo {
    height: 50px;
    background-color:#ccc;
}
</style>
