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
                                    <input class="form-control" v-model="dados.titulo" type="text" placeholder="Buscar uma dica">
                                    <span class="input-group-btn">
                                        <button @click="filtrar()" class="btn btn-primary">
                                            <i class="fa fa-search"></i>
                                            Buscar
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 5px">
                            <div class="col mr-auto float-left">
                                <div v-if="dados.tags" class="control">
                                    <span v-for="tag in dados.tags" :key="tag.id" class="tag btn btn-light btn-sm">
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
                    <button @click="mais()" class="btn btn-light">Mais Resultados</button>
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
import TagService from '../../domain/tag/TagService'
export default {
    components: {
        'meu-header' : Header,
        'card-dica': CardDica,
        'dropdown': Dropdown
    },
    created(){
        this.tagService = new TagService(this.$http)
        this.service = new DicaService(this.$http)
        this.service.lancamento(0)
        .then(dicas => {
            console.log(dicas)
            this.dicas = dicas
            },err => console.log(err));
        this.tagService.buscar()
        .then(tags => this.opcaoTags = tags);
    },
    methods: {
        selecionarTag($event) {
            if (!this.dados.tags.map(el => el.id).includes($event.id)) {
                this.dados.tags.push($event);
            }
        },
        removeTag(tag) {
            let i = this.dados.tags.indexOf(tag)
            this.tags.splice(i, 1)
        },
        mais(){
            this.offset = this.offset + 3;
            if(filtro){
                this.service.filtrar(this.dados,this.offset)
                .then(dicas => {
                console.log(dicas)
                dicas.forEach(dica => this.dicas.push(dica))
                })
            }else{
            this.service.lancamento(this.offset)
            .then(dicas => {
                console.log(dicas)
                dicas.forEach(dica => this.dicas.push(dica))
                })
            }
        },
        filtrar(){
            this.filtro = true;
            this.service.filtrar(this.dados,0).then(dicas => this.dicas = dicas)
        }
    },
    data() {
        return {
            dicas: [],
            opcaoTags: [],
            offset : 0,
            filtro : false,
            dados : {titulo : '', tags : []}
        }
    }
}
</script>
<style scopedSlots>
.tag {
    margin: 5px;
}
</style>
