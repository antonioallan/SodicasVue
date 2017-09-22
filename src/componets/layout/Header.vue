<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <router-link :to="{ name : 'home' }">
                        <div class="title">
                            <span class="icon has-text-primary">
                                <i class="fa fa-hashtag"></i>
                            </span>
                            SóDicas
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="navbar-start" v-if="logado">
                <router-link class="navbar-item" :to="{ name : 'area' }">
                    <span class="icon">
                        <i class="fa fa-book"></i>
                    </span>
                    Dicas
                </router-link>
                <router-link class="navbar-item" :to="{ name : 'perfil' }">
                    <span class="icon">
                        <i class="fa fa-user"></i>
                    </span>
                    Perfil
                </router-link>
            </div>
            <div class="navbar-end">
                <router-link v-if="!logado" class="navbar-item" :to="{ name : 'login' }">
                    <span class="icon">
                        <i class="fa fa-user"></i>
                    </span>
                    Login
                </router-link>
                <router-link v-if="logado" class="navbar-item" :to="{ name : 'acesso' }">
                    <span class="icon">
                        <i class="fa fa-user-secret"></i>
                    </span>
                    Conta de Acesso
                </router-link>
                <div @click="logout()">
                <router-link  v-if="logado" class="navbar-item" :to="{ name : 'home' }">
                    <span class="icon">
                        <i class="fa fa-power-off"></i>
                    </span>
                    Sair
                </router-link>
                </div>
            </div>
        </nav>
    </div>
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
