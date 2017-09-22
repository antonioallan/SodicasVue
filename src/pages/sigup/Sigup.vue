<template>
    <div>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Feliz aquele que transfere o sabe e aprende o que ensina.
                    </h1>
                    <h2 class="subtitle is-5">
                        Cora Carolina.
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-offset-4 is-4">
                        <article class="message is-success">
                            <div class="message-header">
                                <p>Cadastrar</p>
                            </div>
                            <div class="message-body">
                                <div class="field">
                                    <div class="control has-icons-left">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-user"></i>
                                        </span>
                                        <input v-model="usuario.username" class="input" type="text" placeholder="username" />
                                    </div>
                                </div>
                                <div class="field">
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="email" placeholder="Email">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <div class="control has-icons-left has-icons-left">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-lock"></i>
                                        </span>
                                        <input v-model="usuario.senha" class="input" type="password" placeholder="senha" />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-icons-left has-icons-right">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-lock"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                            <i class="fa" :class="[valido ? 'fa-check' : 'fa-exclamation-triangle']"></i>
                                        </span>
                                        <input @blur="checarSenha()" class="input" v-model="confsenha" :class="{'is-danger' : !valido}" type="password" placeholder="repetir senha" />
                                    </div>
                                </div>
                                <div class="field is-grouped is-grouped-right">
                                    <div class="control">
                                        <button class="button is-primary">
                                            Cadastrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
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
