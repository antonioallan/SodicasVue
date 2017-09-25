<template>
    <div class="dropdown" :class="{'show' : ativo }">
        <button @click="toggle()" class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdown-menu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ label }}
        </button>
        <div class="dropdown-menu" :class="{'show' : ativo }" aria-labelledby="dropdown-menu3">
            <div @click="clicado(opcao)" v-for="opcao in opcoes" :key="opcao.id" class="dropdown-item clicar">
                {{ opcao.nome }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['opcoes', 'label', 'eh-ativo'],
    created() {
        this.ativo = this.ehAtivo
    },
    methods: {
        clicado(item) {
            this.$emit('itemClicado', item);
            this.ativo = false
        },
        toggle() {
            this.ativo = !this.ativo
        },
    },
      data() {
        return {
            ativo: false
        }
    }
}
</script>
<style>
    .clicar{
        cursor: pointer;
    }
    .clicar:hover{
        color: #999
    }
</style>


