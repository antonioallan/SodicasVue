<template>
  <div v-show="visible" class="message">
    <div class="alert alert-dismissible" :class="classeCss" role="alert">
        <button type="button" @click="close()" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        {{ msg }}
        <slot name="body"></slot>
        <div class="progress-bar prog" :class="classeProgress" role="progressbar" :style="{width: tempo+'%'}" :aria-valuenow="tempo" aria-valuemin="0" aria-valuemax="100"></div>
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
            this.classeProgress = 'bg-'.concat(msg.tipo)
            this.iniciarContador()
        },
        iniciarContador(){
            let intervalo = setInterval(() => {
                if(this.tempo < 100){
                    this.tempo++
                }
            },35) 
            setTimeout(()=> {
                
                this.visible = false
                this.tempo = 0
                clearInterval(intervalo)
            }, 4000);
        }
    },
    data(){
      return {
          visible : false,
          tempo : 0,
          classeCss : 'alert-info',
          classeProgress : 'bg-info',
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
    .prog{
        height: 3px;
    }
</style>
