<template>
  <div>
    <button type="primary" :text="buttonText" @click.native="newStep"></button>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      // 改变这里并不会出发 hot-reload，这里是initial state
      buttonText: 'RoomDetail!'
    }
  },
  methods: {
    newStep () {
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
