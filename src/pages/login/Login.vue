<template>
    <div>
        <div class="jumbotron jumbotron-fluid bg-secondary">
            <div class="container">
                <h3 class="display-5 text-white">
                    Sábio é aquele que partilha seus conhecimentos.
                </h3>
                <h3 class="h4 text-white">
                    <small>Édy Leonardo.</small>
                </h3>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4 mr-auto ml-auto">
                    <div class="card">
                        <div class="card-header bg-dark text-white">
                            Login
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <input class="form-control" v-model="credencias.username" type="text" placeholder="username" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    <input class="form-control" v-model="credencias.senha" type="password" placeholder="senha" />
                                </div>
                            </div>
                            <div class="form-group">
                                <button @click="logando()" class="btn btn-primary">
                                    Entrar
                                </button>
                                <router-link class="btn btn-link" :to="{ name : 'sigup' }">
                                    Cadastrar
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import security from '../../events/seguranca/security'
import SecurityService from '../../domain/seguranca/SecurityService'
import AutorService from '../../domain/autor/AutorService'
import message from '../../events/message/message'
export default {
    methods: {
        logando() {
            this.$securityService.login(this.credencias)
                .then((user) => {
                    let autor = user.usuario.autor;
                    if (autor) {
                            this.$router.push({ name: 'area' })
                        } else {
                            this.$router.push({ name: 'perfil' })
                        }
                }).catch(err => {
                    console.log(err)
                    message.$emit('show',{ message : 'Usuário ou Senha Inválida', tipo : 'danger' })
                })

        }
    },
    data() {
        return {
            credencias: {}
        }
    }
}
</script>
