<template>
    <div>
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
        </div>
    </div>
    </div>
</template>
<script>
import CardDica from '../../componets/shared/card-dica/CardDica.vue'
import Dropdown from '../../componets/shared/dropdown/Dropdown.vue'
import Dica from '../../domain/dica/Dica'
import Tag from '../../domain/tag/Tag'
export default {
    components: {
        'card-dica': CardDica,
        'dropdown': Dropdown
    },
    methods: {
        selecionarTag($event) {
            if (!this.tags.map(el => el.id).includes($event.id)) {
                this.tags.push($event);
            }
        },
        removeTag(tag){
            let i = this.tags.indexOf(tag)
            this.tags.splice(i,1)
        }
    },
    data() {
        return {
            dicas: [
                new Dica(1, "Instalando um chuveiro", '06/07/2017', "Allan", "para instalar um chuveiro tem que primeiro ...", [
                    new Tag(1, "Casa"),
                    new Tag(2, "Lar"),
                    new Tag(3, "Manutenção")
                ], 3.5),
                new Dica(2, "Instalando um Ruimdows", '05/07/2017', "Allan", "para instalar essa porcaria tem que primeiro ...", [
                    new Tag(4, "Informatica"),
                    new Tag(5, "Windows"),
                    new Tag(7, "SO")
                ], 4.8),
                new Dica(2, "Instalando um Bomba", '04/07/2017', "Allan", "para instalar um Bomba tem que primeiro ...", [
                    new Tag(1, "ALQUAIDA"),
                    new Tag(2, "HAMAS"),
                    new Tag(3, "TERRORISMOS")
                ], 1)

            ],
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
    .tag{
        margin: 5px;
    }
</style>
