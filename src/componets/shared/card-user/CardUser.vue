<template>
    <div class="card text-center card-avatar">
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
import Autor from '../../../domain/autor/Autor'
import Rating from '../rating/Rating.vue'
export default {
    components: {
        'rating': Rating
    },
    data() {
        return {
            autor: new Autor('https://marketplace.canva.com/MAB6v9eTAHs/1/thumbnail/canva-robot-avatar-MAB6v9eTAHs.png', 'Allan', 'allan.santos', 3.2, 'Desenvolvedor de sistema e entusiasta em falar mau das tecnologias!')
        }
    }
}
</script>

<style scopedSlots>
.card-avatar {
    margin: 1vw;
}

.card-div {
    margin-top: 20px;
}
</style>
