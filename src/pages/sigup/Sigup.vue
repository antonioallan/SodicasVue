<template>
    <div>
        <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
                <h1 class="display-5 text-white">
                    Feliz aquele que transfere o sabe e aprende o que ensina.
                </h1>
                <h2 class="h4 text-white">
                    Cora Carolina.
                </h2>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-4 mx-auto">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            usuario: {
                username: '',
                senha: ''
            },
            valido: true,
            confsenha: ''
        }
    },
    methods: {
        checarSenha() {
            this.valido = (this.usuario.senha == this.confsenha)
        }
    }
}
</script>
<style scopedSlots>
    .card-div{
        margin: 15px;
    }
</style>
