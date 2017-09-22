<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Sábio é aquele que partilha seus conhecimentos.
                    </h1>
                    <h2 class="subtitle is-5">
                        Édy Leonardo.
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-offset-4 is-4">
                        <article class="message">
                            <div class="message-header">
                                <p>Login</p>
                            </div>
                            <div class="message-body">
                                <div class="field">
                                    <div class="control has-icons-left">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-user"></i>
                                        </span>
                                        <input class="input" type="text" placeholder="username" />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-icons-left">
                                        <span class="icon is-small is-left">
                                            <i  class="fa fa-lock"></i>
                                        </span>
                                        <input class="input" type="password" placeholder="senha" />
                                    </div>
                                </div>
                                <div class="field is-grouped is-grouped-right">
                                    <div class="control">
                                        <div class="button is-link">
                                            <router-link :to="{ name : 'sigup' }">
                                                Cadastrar
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="control">
                                        <button @click="logando()" class="button is-primary">
                                            <router-link :to="{ name : 'area' }">Entrar</router-link></button>
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
import logar from '../../events/login/logar'
export default {
    methods : {
        logando(){
            logar.$emit('logado')
        }
    }
}
</script>
