<template>
<div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border border-top-0 border-left-0 border-right-0 border-secondary row">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name : 'home' }">
                    <span class="icon has-text-primary">
                        <i class="fa fa-hashtag"></i>
                    </span>
                    SóDicas
                </router-link>
                <button class="navbar-toggler" @click="toggle()" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{'show' : isShow}" id="navbarTogglerDemo">
                    <ul class="navbar-nav mr-auto" v-if="logado">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name : 'area' }">
                                <i class="fa fa-book"></i>
                                Dicas<button class="navbar-toggler" @click="toggle()" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
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
</div>
</template>
<script>
import security from '../../events/seguranca/security'
export default {
    created(){
        this.logado = this.$securityService.isLogado()
    },
    mounted() {
        security.$on('deslogado', () => this.logado = false)
    },
    data() {
        return {
            logado: false,
            isShow: false,
        }
    },
    methods: {
        logout(){
            this.$securityService.logout();
        },
        toggle(){
            this.isShow = !this.isShow
        }
    }
}
</script>
