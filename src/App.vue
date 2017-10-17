<template>
<div>
  <message />
  <router-view></router-view>
</div>
</template>

<script>
import Message from './componets/shared/message/Message.vue'
import security from './events/seguranca/security'
export default {
  created(){
    security.$on("logout",()=>{
      this.$router.push({ name: 'login' })
    })
  },
  name: 'app',
  components : {
    'message' : Message
  }
}
</script>
