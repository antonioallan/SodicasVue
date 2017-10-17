<template>
    <div>
        <meu-header/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 bg-success">
                    <card-user :autor="autor" />
                </div>
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="card card-div">
                                <header class="card-header">
                                    Criar Dicas
                                </header>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="control-label">Titulo</label>
                                        <input v-model="dica.titulo" class="form-control" type="text" placeholder="Informe o titulo pra sua dica">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Conteúdo</label>
                                        <textarea v-model="dica.conteudo" class="form-control" placeholder="Informe sua dica"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            Tags
                                            <button title="Nova Tag" v-modal:show="{modal : 'madalTag'}" class="btn btn-sm">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </label>
                                        <select class="form-control" v-model="dica.tags" multiple size="5">
                                            <option v-for="tag in tags" :key="tag.id" :value="tag">{{ tag.nome }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <button @click="addDica()" class="btn btn-primary">Salvar</button>
                                        <button @click="limparForm()" class="btn btn-link">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div v-for="dica of dicas" :key="dica.id" class="card-div">
                                <div class="content">
                                    <card-dica :dica="dica">
                                        <div slot="acao">
                                            <button @click="seleciona(dica)" title="alterar" class="btn btn-sm">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button v-modal:show="{modal : 'conformacao'}" @click="seleciona(dica)" title="Remover" class="btn btn-sm btn-danger">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </div>
                                    </card-dica>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <modal name="madalTag">
                    <p slot="header"> Cadastrar Tag</p>
                    <div slot="body">
                        <div class="form-group">
                            <label class="control-label">Nome</label>
                            <input v-model="tag.nome" class="form-control" type="text" placeholder="Informe o nome da tag" />
                        </div>
                    </div>
                    <div slot="footer">
                        <div class="form-group">
                            <button v-modal:hide="{modal : 'madalTag'}" @click="addTag()" class="btn btn-primary">Salvar</button>
                            <button v-modal:hide="{modal : 'madalTag'}" class="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </modal>
                <modal name="conformacao">
                    <p slot="header">Confirmação</p>
                    <div slot="body">
                        <p>Este procedimento removerá esta dica de nossa base de dados, deseja realizar esta operação?</p>
                    </div>
                    <div slot="footer">
                        <div class="form-group">
                            <button v-modal:hide="{modal : 'conformacao'}" @click="remove()" class="btn btn-info">OK</button>
                            <button v-modal:hide="{modal : 'conformacao'}" class="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </modal>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../componets/layout/Header.vue'
import CardUser from '../../componets/shared/card-user/CardUser.vue'
import CardDica from '../../componets/shared/card-dica/CardDica.vue'
import Modal from '../../componets/shared/modal/Modal.vue'
import Dica from '../../domain/dica/Dica'
import DicaService from '../../domain/dica/DicaService'
import AutorService from '../../domain/autor/AutorService'
import TagService from '../../domain/tag/TagService'
import Tag from '../../domain/tag/Tag'
import Autor from '../../domain/autor/Autor'
export default {
    components: {
        'meu-header': Header,
        'card-user': CardUser,
        'card-dica': CardDica,
        'modal': Modal
    },
    created(){
        this.dicaService = new DicaService(this.$http)
        this.tagService = new TagService(this.$http)
        this.autor = AutorService.getAutor();
        this.dicaService.buscarPor(this.autor)
        .then(dicas => {
            this.dicas = dicas
        })
        this.tagService.buscar().then(tags => this.tags = tags)
    },
    methods: {
        addTag() {
            this.tagService.cadastrar(this.tag).then(tag => {
                this.tags.push(tag)
                this.tag = {}
            },err => console.log(err))
            
        },
        addDica() {
            if (this.dica.id) {
                this.limparForm()
            } else {
                this.dica.id = Math.random()
                this.dica.data = new Date().toLocaleDateString('pt-br')
                this.dica.pontuacao = 0;
                this.dica.autor = this.autor.nome
                this.dicas.unshift(this.dica)
                this.limparForm()
            }
        },
        limparForm() {
            this.dica = new Dica(0, '', '', '', '', [], 0)
        },
        seleciona(dica) {
            this.dica = dica;
        },
        remove() {
            let i = this.dicas.indexOf(this.dica)
            this.dicas.splice(i, 1)
            this.limparForm()
        }


    },
    data() {
        return {
            autor: new Autor('', '', '', 0, ''),
            dicas: [],
            tags: [],
            tag: {},
            dica: new Dica({tags : []})
        }
    }
}
</script>
<style scopedSlots>
.card-div {
    margin-top: 20px;
}
</style>

