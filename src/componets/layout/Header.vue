<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border border-top-0 border-left-0 border-right-0 border-secondary row">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name : 'home' }">
                    <span class="icon has-text-primary">
                        <i class="fa fa-hashtag"></i>
                    </span>
                    SóDicas
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </router-link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo">
                    <ul class="navbar-nav mr-auto" v-if="logado">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name : 'area' }">
                                <i class="fa fa-book"></i>
                                Dicas
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name : 'perfil' }">
                                <i class="fa fa-user"></i>
                                Perfil
                            </router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link v-if="!logado" class="nav-link" :to="{ name : 'login' }">
                                <i class="fa fa-user"></i>
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="logado" class="nav-link" :to="{ name : 'acesso' }">
                                <i class="fa fa-user-secret"></i>
                                Conta de Acesso
                            </router-link>
                        </li>
                        <li @click="logout()" class="nav-item">
                            <router-link  v-if="logado" class="nav-link" :to="{ name : 'home' }">
                                <i class="fa fa-power-off"></i>
                                Sair
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>
<script>
import logar from '../../events/login/logar'
export default {
    mounted() {
        logar.$on('logado', () => this.logado = true)
        logar.$on('deslogado', () => this.logado = false)
    },
    data() {
        return {
            logado: false
        }
    },
    methods: {
        logout(){
            this.logado = false
        }
    }
}
</script>
