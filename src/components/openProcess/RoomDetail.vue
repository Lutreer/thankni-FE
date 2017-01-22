<template>
  <div>
    <grid>
      <grid-item label="Grid" v-for="i in 9">
        <div class="inner-logo"></div>
      </grid-item>
    </grid>
    <XButton type="primary" :text="buttonText" @click.native="newStep"></XButton>
  </div>
</template>

<script>
import { XButton, Grid, GridItem } from 'vux'

export default {
  components: {
    XButton,
    Grid,
    GridItem
  },
  data () {
    return {
      // 改变这里并不会出发 hot-reload，这里是initial state
      buttonText: 'RoomDetail!'
    }
  },
  methods: {
    newStep () {
      debugger
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
