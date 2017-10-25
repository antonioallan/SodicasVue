<template>
    <div>
        <meu-header/>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 bg-success area-user">
                <card-user :autor="autor" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
                <div class="card text-center card-div">
                    <div class="card-header text-left">
                        <span class="h4">Seu Perfil</span>
                    </div>
                    <div class="card-body">
                        <img :src="autor.avatar" @click="toggle()" width="128" height="128" />
                        <div class="collapse" :class="{'show': isshow}" id="collapseExample">
                            <div class="card card-body block-img">
                                <div class="row">
                                    <div v-for="opcao in opcoes" :key="opcao" class="col-sx-12 col-sm-12 col-md-6 col-lg-2">
                                        <img :src="opcao" class="img-fluid clicavel" @click="mudar(opcao)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input v-model="autor.nome" class="form-control" type="text" placeholder="Nome" />
                        </div>
                        <div class="form-group">
                            <input disabled v-model="autor.nickname" class="form-control" type="text" placeholder="Apelido" />
                        </div>
                        <div class="form-group">
                            <textarea v-model="autor.sobre" class="form-control" type="text" placeholder="Sobre"></textarea>
                        </div>
                        <div class="form-group text-right">
                            <button class="btn btn-primary" @click="salvar()">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../componets/layout/Header.vue'
import CardUser from '../../componets/shared/card-user/CardUser.vue'
import Autor from '../../domain/autor/Autor'
import AutorService from '../../domain/autor/AutorService'
import UsuarioService from '../../domain/usuario/UsuarioService'
import message from '../../events/message/message'
export default {
    components: {
        'meu-header': Header,
        'card-user': CardUser
    },
    created() {
        this.service = new UsuarioService(this.$http)
        this.usuario = UsuarioService.getUsuario()
        let autor = AutorService.getAutor()
        this.autor = autor ? autor : new Autor('', '', this.usuario.username, 0, '')
    },
    methods: {
        toggle() {
            this.isshow = !this.isshow
        },
        mudar(url) {
            this.autor.avatar = url
            this.isshow = false
        },
        salvar() {
            this.usuario.autor = this.autor
            this.service.cadastrar(this.usuario).then((usuario) =>
             {
                 UsuarioService.removeUsuario();
                 AutorService.removeAutor()
                 UsuarioService.setUsuario(usuario);
                 AutorService.setAutor(usuario.autor);
                 this.$router.push({name : 'area'})
            }, err => message.$emit('show', { message: err.message, tipo: 'danger' }))
        }
    },
    data() {
        return {
            opcoes: [
                'https://marketplace.canva.com/MAB6v9eTAHs/1/thumbnail/canva-robot-avatar-MAB6v9eTAHs.png',
                'https://upload.wikimedia.org/wikipedia/commons/d/d9/Avatar_robot_head.png',
                'http://www.clker.com/cliparts/H/e/F/a/2/K/blue-robot-md.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png/202px-Robot-clip-art-book-covers-feJCV3-clipart.png',
                'https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png',
                'https://marketplace.canva.com/MAB6vzmEQlA/1/thumbnail/canva-robot-electric-avatar-icon-MAB6vzmEQlA.png'
            ],
            isshow: false,
            usuario: {},
            autor: {}
        }
    }
}
</script>
<style scopedSlots>
.area-user {
    height: 100vh;
}

.block-img {
    margin-bottom: 10px
}

.clicavel {
    cursor: pointer;
}

.card-div {
    margin: 15px;
}
</style>