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
                        <item-menu v-if="this.autor" to="area" label="Dicas" :hasIcon="true" icon="fa fa-book"/>
                        <item-menu to="perfil" label="Perfil" :hasIcon="true" icon="fa fa-user"/>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <item-menu v-if="!logado" to="login" label="Login" :hasIcon="true" icon="fa fa-user"/>
                        <item-menu v-if="logado && autor" to="acesso" label="Conta de Acesso" :hasIcon="true" icon="fa fa-user-secret"/>
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
import ItemMenu from '../shared/menu/ItemMenu.vue' 
import security from '../../events/seguranca/security'
import AutorService from '../../domain/autor/AutorService'
import autor from '../../events/autor/autor'
export default {
    components :{
        'item-menu' : ItemMenu
    },
    created(){
        this.logado = this.$securityService.isLogado()
    },
    mounted() {
        security.$on('deslogado', () => this.logado = false)
        autor.$on('autor_setado',() => this.autor = AutorService.getAutor())
    },
    data() {
        return {
            logado: false,
            isShow: false,
            autor: AutorService.getAutor()
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
