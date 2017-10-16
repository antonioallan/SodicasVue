<template>
    <div class="card card-div">
        <div class="card-body">
                <div class="row">
                <div class="col">
                        <h3 class="h3">{{ dica.titulo }}</h3>
                        <p class="display-5">
                            {{ dica.autor.nickname }}
                        </p>
                    </div>
                    <div class="col ml-auto">
                        <span v-for="tag in dica.tags" :key="tag.id" class="tag btn btn-info btn-sm">{{ tag.nome }}</span>
                    </div>
                </div>
                <p class="card-text">
                    {{ resumo }}
                </p>
                <div class="row">
                    <div class="col mr-auto">
                        <rating :pontuacao='dica.pontuacao'/>
                    </div>
                    <div class="col ml-auto">
                        <p class="text-right">{{ dataformatada }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col mr-auto">
                        <router-link :to="{ name: 'dica', params: { id : dica.id }}">Ver Mais</router-link>
                    </div>
                </div>
                <div class="row">
                    <slot name="acao" class="columns"></slot>
                </div>
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
    },
    computed: {
        dataformatada(){
            return new Date(this.dica.data).toLocaleDateString();
        },
        resumo(){
            return this.dica.conteudo.substring(0,120).concat("...");
        }
    }

}
</script>
<style scopedSlots>
    .tag{
        margin: 5px;
    }
    .card-div{
        padding-bottom: 15px;
    }
</style>
