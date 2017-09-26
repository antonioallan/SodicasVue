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
            this.show(msg)
        });
    },
    methods :{
        close(){
            this.visible = false 
        },
        show(msg){
            this.visible = true
            this.msg = msg.message
            this.classeCss = 'alert-'.concat(msg.tipo)
            setTimeout(()=> {
                this.visible = false
            }, 4000);
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
        right: 0;
        z-index : 99999999;
        margin: 15px;
        opacity: 0.9;
    }
</style>
