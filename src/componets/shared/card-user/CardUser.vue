<template>
    <div v-if="autor" class="card text-center card-avatar">
        <div class="card-body">
            <img :src="autor.avatar" width="128" height="128" />
            <h3 class="h3">{{ autor.nome }}</h3>
            <p class="h5">@{{ autor.nickname }}</p>
            <div class="row justify-content-md-center">
                <rating :pontuacao='autor.pontuacao' />
            </div>
            <div class="card-text">
                {{ autor.sobre }}
            </div>
        </div>
    </div>
</template>
<script>
import Rating from '../rating/Rating.vue'
export default {
    props:{
        autor : {
            required : true
        }
    },
    components: {
        'rating': Rating
    }
}
</script>

<style scopedSlots>
.card-avatar {
    margin: 2vw 0 2vw 0vw;
}

.card-div {
    margin-top: 20px;
}
</style>
