<template>
  <div>
    <div class="vue+vuex">
      <h1>aaa</h1>
    </div>
    <div>
      <router-link to="/aaa">Go to aaa</router-link>
      <router-link to="/bbb">Go to bbb</router-link>

    </div>
    <div title="cell demo">
      <div value="Cool" is-link></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vuex-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
