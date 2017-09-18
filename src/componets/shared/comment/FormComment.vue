<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="field">
                    <p class="control">
                        <input v-model="comment.autor" class="input" type="text" placeholder="Seu Nome" />
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <textarea v-model="comment.conteudo" class="textarea" placeholder="Seu  comentário..."></textarea>
                    </p>
                </div>
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <button @click="comentar()" class="button is-info">Comentar</button>
                        </div>
                    </div>
                </nav>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    methods: {
        comentar() {
            this.comment.data = new Date().toLocaleDateString('pt-br');
            this.$emit("salvar", this.comment);
            this.comment = { id: '', autor: '', conteudo: '', data: '' }
        }
    },
    data() {
        return {
            comment: { id: '', autor: '', conteudo: '', data: '' }
        }
    }
}
</script>
