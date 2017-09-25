<template>
  <div v-show="visible" class="message">
    <div class="alert alert-dismissible" :class="classeCss" role="alert">
        <button type="button" @click="close()" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        {{ msg }}
        <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
import message from '../../../events/message/message' 
export default {
    mounted(){
        message.$on('hide',() => this.visible = false);
        message.$on('show',(msg) => {
            console.log(msg)
            this.visible = true
            this.msg = msg.message
            this.classeCss = 'alert-'.concat(msg.tipo)
        });
    },
    methods :{
        close(){
            this.visible = false 
        }
    },
    data(){
      return {
          visible : false,
          classeCss : 'alert-info',
          msg : ''
          
    }
  }
}
</script>
<style scopedSlots>
    .message{
        position: absolute;
        top: 0;
        left: 40%;
        z-index : 99999999;
        width: auto;
    }
</style>
