<template>
  <div>
    <div class="vux-demo">
      <h1>aaa</h1>
    </div>
    <div>
      <router-link to="/aaa">Go to aaa</router-link>
      <router-link to="/bbb">Go to bbb</router-link>

    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
