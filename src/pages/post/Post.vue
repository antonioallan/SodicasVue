<template>
    <div>
        <meu-header/>
        <div class="jumbotron jumbotron-fluid bg-warning">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-9">
                            <h1 class="display-5">{{ dica.titulo }}</h1>
                            <h2 v-if="dica.autor" class="h5">
                                by {{ dica.autor.nickname }}
                                <small v-text="dica.dataFormatada"></small>
                            </h2>
                            <div class="tags">
                                <span v-for="tag in dica.tags" :key="tag.id" class="tag btn btn-primary btn-sm">{{ tag.nome }}</span>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="text-center">
                                <span class="tag btn btn-success btn-lg">{{ dica.pontuacao }}</span>
                            </div>
                            <votar @votado="computandoVoto($event)" />
                        </div>
                    </div>
                </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="text-justify">
                        {{ dica.conteudo }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <card-comment v-for="comment in cometarios" :key="comment.id" :comment="comment" />
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <form-comment @salvar="addComentario($event)" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Dica from '../../domain/dica/Dica'
import DicaService from '../../domain/dica/DicaService'
import AutorService from '../../domain/autor/AutorService'
import ComentarioService from '../../domain/comentario/ComentarioService'
import Comentario from '../../domain/comentario/Comentario'
import CardComment from '../../componets/shared/comment/CardComment.vue'
import FormComment from '../../componets/shared/comment/FormComment.vue'
import RatingVotar from '../../componets/shared/rating/RatingVotar.vue'
import message from '../../events/message/message'
import Header from '../../componets/layout/Header.vue'
export default {
    components: {
        'card-comment': CardComment,
        'form-comment': FormComment,
        'votar': RatingVotar,
        'meu-header' : Header
    },
    beforeCreate(){
        let id = this.$route.params.id
        this.service = new DicaService(this.$http)
        this.service.carregar(id)
        .then(dica => this.dica = new Dica(dica),err => console.log(err))
        this.comentarioService = new ComentarioService(this.$http)
        this.comentarioService.buscar(id).then(cometarios => this.cometarios = cometarios, err => console.log(err))
    },
    data() {
        return {
            dica: {},
            cometarios: []
        }
    },
    methods: {
        addComentario($event) {
            let comentario = new Comentario($event);
            comentario.dica = this.dica
            console.log(comentario)
            this.comentarioService.cadastrar(comentario).then(comentario => {
                this.cometarios.unshift(new Comentario(comentario));
            })
            
        },
        computandoVoto($event) {
            let autor = AutorService.getAutor();
            if(autor && (autor.id == this.dica.autor.id)){
                message.$emit('show',{ message : 'Não Permitido votar em suas próprias dicas!', tipo : 'danger' })
                return
            }
            this.service.votar({dica : this.dica, nota : $event}).then(dica => {
                this.dica = dica
                message.$emit('show',{ message : 'obrigado por participar', tipo : 'success' })
            }, err => message.$emit('show',{ message : 'Erro em seu voto, tente novamente!', tipo : 'danger' })
            )
        }
    }
}
</script>
<style>
    .tag{
        margin: 5px;
    }
</style>
