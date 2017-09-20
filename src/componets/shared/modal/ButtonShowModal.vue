<template>
    <button class="button" :class="btnClass" @click="mostra()">
        <slot></slot>
    </button>
</template>
<script>
import show from '../../../events/modal/show'
export default {
    props : ['btnClass'],
    methods : {
        mostra(){
            show.$emit('showModal');
        }
    }
}
</script>
