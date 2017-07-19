<template>
  <div>

    <button type="primary" :text="buttonText" @click.native="newStep"></button>
    <router-view></router-view>
  </div>
</template>

<script>
import Router from '../../middlewares/router'

export default {
  components: {

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
