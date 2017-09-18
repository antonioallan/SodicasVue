<template>
<div>
  <meu-header/>
  <router-view></router-view>
</div>
</template>

<script>
import Header from './componets/layout/Header.vue'
export default {
  name: 'app',
  components : {
    'meu-header' : Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
