<template>
    <div>
        <div class="jumbotron jumbotron-fluid bg-warning">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-9">
                            <h1 class="display-5">{{ dica.titulo }}</h1>
                            <h2 class="h5">
                                by {{ dica.autor }}
                                <small>{{ dica.data }}</small>
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
import Tag from '../../domain/tag/Tag'
import Comentario from '../../domain/comentario/Comentario'
import CardComment from '../../componets/shared/comment/CardComment.vue'
import FormComment from '../../componets/shared/comment/FormComment.vue'
import RatingVotar from '../../componets/shared/rating/RatingVotar.vue'
import message from '../../events/message/message'
export default {
    components: {
        'card-comment': CardComment,
        'form-comment': FormComment,
        'votar': RatingVotar
    },
    data() {
        return {
            dica: new Dica(1, "Instalando um chuveiro", '06/07/2017', "Allan", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ante sed lacus aliquet malesuada vitae vitae nibh. Nullam tincidunt suscipit tortor eu cursus. Morbi in pellentesque tellus, sed pharetra nulla. Curabitur efficitur tortor euismod dui scelerisque, id molestie velit pulvinar. Mauris ut turpis aliquet, mollis ante non, rhoncus urna. Nulla facilisi. Sed id elementum orci. Quisque tempus turpis a ante gravida semper. Quisque vehicula neque ac aliquam consequat. Curabitur eleifend, neque at facilisis gravida, lectus quam pellentesque neque, eget malesuada neque justo at justo. Curabitur scelerisque neque sed justo ultricies auctor. Maecenas ligula orci, sagittis ut tincidunt tempor, ullamcorper sollicitudin ligula. Sed eu dui id tortor tristique pretium. Proin et porttitor enim. Vestibulum condimentum ultricies suscipit. Etiam vehicula nunc a gravida finibus. Mauris placerat maximus pulvinar. Duis pellentesque rhoncus euismod. Nullam erat elit, consectetur eu ligula ut, laoreet malesuada nisl. Etiam vulputate vitae ipsum sit amet accumsan. Suspendisse varius sed turpis eu faucibus. Quisque fermentum felis in iaculis volutpat. Curabitur at tellus posuere mauris feugiat maximus vitae et eros. Mauris vulputate scelerisque augue, vel imperdiet eros luctus eget. Etiam elementum interdum lobortis. Nullam in urna hendrerit, bibendum tellus sit amet, finibus arcu. Donec sed sagittis augue. Sed congue non nisi a aliquet. Cras bibendum vehicula quam, non rhoncus libero placerat sit amet. In ultrices diam sed dolor congue, at porttitor nibh condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer imperdiet id velit vel interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sagittis tortor vel dolor luctus aliquam. Quisque consectetur elementum eleifend. In hendrerit odio in libero scelerisque, sed pretium nisi pellentesque. Aliquam sagittis blandit tellus et lobortis. Maecenas ullamcorper magna massa, vel ultricies quam lobortis et. Maecenas magna mauris, porttitor non pretium sit amet, ultricies quis neque. Integer sit amet semper dolor. Etiam aliquet auctor dapibus. Suspendisse eu viverra odio. Maecenas neque nunc, porttitor sit amet cursus eu, finibus congue quam. Sed consectetur nibh eu nibh facilisis lobortis. Quisque scelerisque nisi dolor, vel consequat urna dapibus vel. Cras molestie ex sed risus consequat sollicitudin. Duis tempus nunc eget justo hendrerit, in volutpat enim rhoncus. Etiam bibendum eros a enim condimentum accumsan", [
                new Tag(1, "Casa"),
                new Tag(2, "Lar"),
                new Tag(3, "Manutenção")
            ], 3.5),
            cometarios: [
                new Comentario(1,'Joao Zinho','Esta post e muito bom mesmo valeu!!!','15/08/2017'),
                new Comentario(2,'Tomas Turbamdo','Prefiro nao comentar nada','15/08/2017'),
                new Comentario(3,'Chico Rita','muito legal, bom mesmo','21/07/2017'),
                new Comentario(4,'Ms Hater','Isso é uma bosta','07/07/2017')
            ]


        }
    },
    methods: {
        addComentario($event) {
            $event.id = Math.random();
            this.cometarios.unshift($event);
        },
        computandoVoto($event) {
            message.$emit('show',{ message : 'obrigado por participar', tipo : 'success' })
            this.dica.pontuacao = (this.dica.pontuacao + $event) / 2
        }
    }
}
</script>
<style>
    .tag{
        margin: 5px;
    }
</style>
