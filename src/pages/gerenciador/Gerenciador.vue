<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-2">
            <article class="tile is-child notification is-primary" style="height : 100%">
                <div class="content">
                    <div class="columns is-gap is-multiline">
                        <div class="column is-12">
                            <avatar :url="autor.avatar" :alterar="false" />
                        </div>
                        <div class="column is-12 has-text-centered">
                            <h3 class="title is-3">{{ autor.nome }}</h3>
                            <p class="subtitle is-5">@{{ autor.nickname }}</p>
                        </div>
                        <div class="column is-10 is-offset-2 has-text-centered">
                            <rating :pontuacao='autor.pontuacao' />
                        </div>
                        <div class="column is-12 has-text-centered">
                            {{ autor.sobre }}
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent">
                    <article class="tile is-child">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Criar Dicas
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="field">
                                        <label class="label">Titulo</label>
                                        <div class="control">
                                            <input v-model="dica.titulo" class="input" type="text" placeholder="Informe o titulo pra sua dica">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Conteúdo</label>
                                        <div class="control">
                                            <textarea v-model="dica.conteudo" class="textarea" placeholder="Informe sua dica"></textarea>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">
                                            Tags
                                            <button title="Nova Tag" v-modal:show="{modal : 'madalTag'}" class="button is-small">
                                                <span class="icon is-small">
                                                    <i class="fa fa-plus"></i>
                                                </span>
                                            </button>
                                        </label>
                                        <div class="control">
                                            <div class="select is-multiple">
                                                <select v-model="dica.tags" multiple size="5">
                                                    <option v-for="tag in tags" :key="tag.id" :value="tag">{{ tag.nome }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button @click="addDica()" class="button is-primary">Salvar</button>
                                        </div>
                                        <div class="control">
                                            <button @click="limparForm()" class="button is-link">Cancelar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent is-vertical">
                    <article v-for="dica of dicas" :key="dica.id" class="tile is-child">
                        <div class="content">
                            <card-dica :dica="dica">
                                <div slot="acao">
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <button @click="seleciona(dica)" title="alterar" class="level-item button is-small">
                                                <span class="icon is-small">
                                                    <i class="fa fa-pencil"></i>
                                                </span>
                                            </button>
                                            <button v-modal:show="{modal : 'conformacao'}" @click="seleciona(dica)" title="Remover" class="level-item button is-small is-danger">
                                                <span class="icon is-small">
                                                    <i class="fa fa-trash"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </card-dica>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <modal name="madalTag">
            <p slot="header"> Cadastrar Tag</p>
            <div slot="body">
                <div class="field">
                    <div class="field">
                        <label class="label">Nome</label>
                        <div class="control">
                            <input v-model="tag.nome" class="input" type="text" placeholder="Informe o nome da tag">
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <div class="field is-grouped">
                    <div class="control">
                        <button @click="addTag()" class="button is-primary">Salvar</button>
                    </div>
                    <div class="control">
                        <button v-modal:hide="{modal : 'madalTag'}" class="button is-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </modal>
        <modal name="conformacao">
            <p slot="header">Conformação</p>
            <div slot="body">
                <p>Este procedimento removerá esta dica de nossa base de dados, deseja realizar esta operação?</p>
            </div>
            <div slot="footer">
                <div class="field is-grouped">
                    <div class="control">
                        <button v-modal:hide="{modal : 'conformacao'}" @click="remove()" class="button is-info">OK</button>
                    </div>
                    <div class="control">
                        <button v-modal:hide="{modal : 'conformacao'}" class="button is-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
import Avatar from '../../componets/shared/avatar/Avatar.vue'
import CardDica from '../../componets/shared/card-dica/CardDica.vue'
import Rating from '../../componets/shared/rating/Rating.vue'
import Modal from '../../componets/shared/modal/Modal.vue'
import Dica from '../../domain/dica/Dica'
import Tag from '../../domain/tag/Tag'
import Autor from '../../domain/autor/Autor'
export default {
    components: {
        'avatar': Avatar,
        'card-dica': CardDica,
        'rating': Rating,
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
