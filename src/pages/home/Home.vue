<template>
    <div>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="colunm">
                            <h1 class="title">
                                Compartilhando Conhecimento
                            </h1>
                            <h2 class="subtitle">
                                conquistando o mundo.
                            </h2>
                        </div>
                        <div class="column is-offset-1">
                            <div class="field has-addons has-addons-right">
                                <div class="control is-expanded">
                                    <input class="input" type="text" placeholder="Buscar uma dica">
                                </div>
                                <div class="control">
                                    <button class="button is-info has-icon-left">
                                        <span class="icon">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <span>Buscar</span>
                                    </button>
                                </div>
                            </div>
                            <div class="filed is-grouped level-right tags">
                                <div v-if="tags" class="control">
                                    <span v-for="tag in tags" :key="tag.id" class="tag is-light">
                                        {{ tag.nome }}
                                        <button @click="removeTag(tag)" class="delete is-small"></button>
                                    </span>
                                </div>
                                <div style="margin-left : 5px" class="control">
                                    <dropdown label="Selecione tags" :opcoes="opcaoTags" :eh-ativo="false" @itemClicado="selecionarTag($event)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <router-link v-for="dica of dicas" :key="dica.id" :to="{ name: 'dica', params: { id : dica.id }}">
                <card-dica :dica="dica" />
            </router-link>
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
