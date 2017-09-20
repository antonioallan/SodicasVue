<template>
    <span class="icon is-medium has-text-info" @click="marcar()">
        <i class="fa" v-bind:class="[isMarcado ? 'fa-star' : 'fa-star-o', {'fa-3x' : grande , 'fa-2x' : medio, 'fa-lg' : pequeno }]"></i>
    </span>
</template>
<script>
export default {
    props : ['grande','medio','pequeno'],
    data(){
        return {
            isMarcado : false,
        }
    },
    methods:{
        marcar(){
            this.isMarcado = !this.isMarcado
            this.$emit('clickStar',this.isMarcado)
        }
    }
}
</script>
