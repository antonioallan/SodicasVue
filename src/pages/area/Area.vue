<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 bg-success">
            <card-user />
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
                    <input v-model="tag.nome" class="form-control" type="text" placeholder="Informe o nome da tag"/>
                </div>
            </div>
            <div slot="footer">
                <div class="form-group">
                    <button @click="addTag()" class="btn btn-primary">Salvar</button>
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
</template>
<script>
import CardUser from '../../componets/shared/card-user/CardUser.vue'
import CardDica from '../../componets/shared/card-dica/CardDica.vue'
import Modal from '../../componets/shared/modal/Modal.vue'
import Dica from '../../domain/dica/Dica'
import Tag from '../../domain/tag/Tag'
import Autor from '../../domain/autor/Autor'
export default {
    components: {
        'card-user': CardUser,
        'card-dica': CardDica,
        'modal': Modal
    },
    methods: {
        addTag() {
            this.tag.id = Math.random()
            this.tags.push(this.tag)
            this.tag = new Tag(null, '')
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
            this.dica = new Dica(null, '', '', '', '', [], 0)
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
            autor: new Autor('https://marketplace.canva.com/MAB6v9eTAHs/1/thumbnail/canva-robot-avatar-MAB6v9eTAHs.png', 'Allan', 'allan.santos', 3.2, 'Desenvolvedor de sistema e entusiasta em falar mau das tecnologias!'),
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
            tags: [
                new Tag(1, "Casa"),
                new Tag(2, "Lar"),
                new Tag(3, "Manutenção"),
                new Tag(4, "Informatica"),
                new Tag(5, "Windows"),
                new Tag(7, "SO"),
                new Tag(1, "ALQUAIDA"),
                new Tag(2, "HAMAS"),
                new Tag(3, "TERRORISMOS")
            ],

            tag: new Tag(null, ''),
            dica: new Dica(null, '', '', '', '', [], 0)
        }
    }
}
</script>
<style scopedSlots>
    .card-div{
        margin-top: 20px;
    }
</style>

