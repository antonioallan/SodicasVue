<template>
    <div class="columns">
        <star :pequeno="true" @clickStar="mudarVoto($event)"/>
        <star :pequeno="true" @clickStar="mudarVoto($event)"/>
        <star :pequeno="true" @clickStar="mudarVoto($event)"/>
        <star :pequeno="true" @clickStar="mudarVoto($event)"/>
        <star :pequeno="true" @clickStar="mudarVoto($event)"/>
        <button @click="votar($event)" class="button is-dark is-small">Votar</button>
    </div>
</template>
<script>
import Star from '../star/Star.vue'
export default {
    components : {
        'star' : Star
    },
    data(){
        return {
            voto : 0
        }
    },
    methods : {
        mudarVoto($event){
            ($event) ? this.voto++ : this.voto--
        },
        votar(){
            this.$emit('votado',this.voto)
        }
    }
}
</script>
