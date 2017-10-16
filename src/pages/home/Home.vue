<template>
    <div>
        <meu-header/>
        <div class="jumbotron jumbotron-fluid bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col mr-auto">
                        <h3 class="display-5 text-white">
                            Compartilhando Conhecimento
                        </h3>
                        <h3 class="h2 text-white">
                            <small>conquistando o mundo.</small>
                        </h3>
                    </div>
                    <div class="col ml-auto">
                        <div class="row">
                            <div class="col-12">
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Buscar uma dica">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary">
                                            <i class="fa fa-search"></i>
                                            Buscar
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 5px">
                            <div class="col mr-auto float-left">
                                <div v-if="tags" class="control">
                                    <span v-for="tag in tags" :key="tag.id" class="tag btn btn-light btn-sm">
                                        {{ tag.nome }}
                                        <button style="margin-top: -3px; margin-left: 3px" @click="removeTag(tag)" class="close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-auto ml-auto float-right">
                                <dropdown label="Selecione tags" :opcoes="opcaoTags" :eh-ativo="false" @itemClicado="selecionarTag($event)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="dica of dicas" :key="dica.id" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 card-div">
                    <card-dica :dica="dica" />
                </div>
            </div>
            <div class="row">
                <div class="col-3 mx-auto">
                    <button class="btn btn-light">Mais Resultados</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../componets/layout/Header.vue'
import CardDica from '../../componets/shared/card-dica/CardDica.vue'
import Dropdown from '../../componets/shared/dropdown/Dropdown.vue'
import Dica from '../../domain/dica/Dica'
import DicaService from '../../domain/dica/DicaService'
import Tag from '../../domain/tag/Tag'
export default {
    components: {
        'meu-header' : Header,
        'card-dica': CardDica,
        'dropdown': Dropdown
    },
    created(){
        this.service = new DicaService(this.$http)
        this.service.lancamento(0)
        .then(dicas => {
            console.log(dicas)
            this.dicas = dicas
            },err => console.log(err));
    },
    methods: {
        selecionarTag($event) {
            if (!this.tags.map(el => el.id).includes($event.id)) {
                this.tags.push($event);
            }
        },
        removeTag(tag) {
            let i = this.tags.indexOf(tag)
            this.tags.splice(i, 1)
        }
    },
    data() {
        return {
            dicas: [],
            tags: [],
            opcaoTags: [
                new Tag(1, "Casa"),
                new Tag(2, "Lar"),
                new Tag(3, "Manutenção"),
                new Tag(4, "Informatica"),
                new Tag(5, "Windows"),
                new Tag(7, "SO"),
                new Tag(1, "ALQUAIDA"),
                new Tag(2, "HAMAS"),
                new Tag(3, "TERRORISMOS")
            ]
        }
    }
}
</script>
<style scopedSlots>
.tag {
    margin: 5px;
}
</style>
