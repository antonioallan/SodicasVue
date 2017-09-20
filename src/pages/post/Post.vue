<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-10">
                            <h1 class="title">{{ dica.titulo }}</h1>
                            <h2 class="subtitle is-3">
                                by {{ dica.autor }}
                            </h2>
                            <h4 class="subtitle is-5">{{ dica.data }}</h4>
                            <div class="tags">
                                <span v-for="tag in dica.tags" :key="tag.id" class="tag is-primary">{{ tag.nome }}</span>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="tags">
                                <span class="tag is-large is-success">{{ dica.pontuacao }}</span>
                            </div>
                            <votar @votado="computandoVoto($event)" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="tile is-parent">
                <article class="tile is-child notification">
                    <div class="content">
                        <div class="content is-half-mobile">
                            {{ dica.conteudo }}
                        </div>
                    </div>
                </article>
            </div>
            <div class="columns">
                <div class="column">
                    <card-comment v-for="comment in cometarios" :key="comment.id" :comment="comment" />
                </div>
                <div class="column">
                    <form-comment @salvar="addComentario($event)" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Dica from '../../domain/dica/Dica'
import Tag from '../../domain/tag/Tag'
import CardComment from '../../componets/shared/comment/CardComment.vue'
import FormComment from '../../componets/shared/comment/FormComment.vue'
import RatingVotar from '../../componets/shared/rating/RatingVotar.vue'
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
                { id: 1, autor: 'Joao Zinho', conteudo: 'Esta post e muito bom mesmo valeu!!!', data: '17/09/2016' },
                { id: 2, autor: 'Tomas Turbamdo', conteudo: 'Prefiro nao comentar nada', data: '15/08/2017' },
                { id: 3, autor: 'Chico Rita', conteudo: 'muito legal, bom mesmo', data: '21/07/2017' },
                { id: 4, autor: 'Ms Hater', conteudo: 'Isso é uma bosta', data: '07/07/2017' },
            ]


        }
    },
    methods: {
        addComentario($event) {
            $event.id = Math.random();
            this.cometarios.unshift($event);
        },
        computandoVoto($event) {
            alert("Obrigado por participar")
            this.dica.pontuacao = (this.dica.pontuacao + $event) / 2
        }
    }
}
</script>
