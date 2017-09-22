<template>
    <div class="card">
        <div class="card-content">
            <div class="columns">
                <!-- Left side -->
                <div class="column is-8">
                    <p class="title is-3">{{ dica.titulo }}</p>
                    <p class="subtitle is-5">
                        {{ dica.autor }}
                    </p>
                </div>
                <div class="column tags">
                    <span v-for="tag in dica.tags" :key="tag.id" class="tag is-primary">{{ tag.nome }}</span>
                </div>
            </div>
            <div class="content">
                <p class="columns">
                    {{ dica.conteudo }}
                </p>
                <nav class="level">
                    <div class="level-left">
                        <rating :pontuacao='dica.pontuacao'/>
                    </div>
                    <div class="level-right">
                        <p>{{ dica.data }}</p>
                    </div>
                </nav>
                <slot name="acao" class="columns"></slot>
            </div>
        </div>
    </div>
</template>
<script>
import Rating from '../rating/Rating.vue'
export default {
    props : {
        dica : {
            required : true
        }
    },
    components :{
        'rating' : Rating
    }

}
</script>
