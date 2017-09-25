<template>
<div>
  <meu-header/>
  <message />
  <router-view></router-view>
</div>
</template>

<script>
import Header from './componets/layout/Header.vue'
import Message from './componets/shared/message/Message.vue'
export default {
  name: 'app',
  components : {
    'meu-header' : Header,
    'message' : Message
  }
}
</script>
