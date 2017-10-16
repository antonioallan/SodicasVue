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
  name: 'app',
  components : {
    'message' : Message
  }
}
</script>
