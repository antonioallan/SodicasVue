<template>
    <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <input v-model="comment.autor" class="form-control" type="text" placeholder="Seu Nome" />
                </div>
                <div class="form-group">
                    <textarea v-model="comment.conteudo" class="form-control" placeholder="Seu  comentário..."></textarea>
                </div>
                <div class="form-group">
                    <button @click="comentar()" class="btn btn-info">Comentar</button>
                </div>
            </div>
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
