<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      Vue.http.get('/someUrl').then(() => {

      }, () => {

      })

      this.$nextTick(function () {
        debugger
        // 代码保证 this.$el 在 document 中
      })
    },
    methods () {

    }
  }


</script>

<style lang="less">

body {
  background-color: #eee;
}
</style>
