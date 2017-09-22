<template>
    <div class="dropdown" :class="{'is-active' : ativo }">
        <div class="dropdown-trigger" @click="toggle()">
            <button class="button is-danger" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span>{{ label }}</span>
                <span class="icon is-small">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
                <div @click="clicado(opcao)" v-for="opcao in opcoes" :key="opcao.id" class="dropdown-item clicar">
                    {{ opcao.nome }}
                </div>
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


