<template>
    <div class="content">
        <figure class="image is-128x128">
            <img :src="selecionado"/>
            <figcaption v-if="alterar">
                <button v-modal:show="{modal : 'opcaoAvatar'}" class="button is-link">
                    Alterar
                </button>
            </figcaption>
        </figure>
        <modal name="opcaoAvatar">
            <p slot="header">Selecione um Avatar</p>
            <div slot="body" class="columns is-multiline">
                <div v-for="opcao in opcoes" :key="opcao" class="column is-4">
                    <figure v-modal:hide="{modal : 'opcaoAvatar'}" @click="mudar(opcao)" class="image is-64x64 is-click">
                        <img :src="opcao" />
                    </figure>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
import Modal from '../modal/Modal.vue'
export default {
    components : {
        'modal' : Modal
    },
    props: {
        alterar: {
            type: Boolean
        },
        url : {
            type : String
        }
    },
    created(){
        if(this.opcao){
            selecionado = this.opcao
        }
    },
    data() {
        return {
            selecionado: 'https://marketplace.canva.com/MAB6v9eTAHs/1/thumbnail/canva-robot-avatar-MAB6v9eTAHs.png',
            opcoes: [
                'https://marketplace.canva.com/MAB6v9eTAHs/1/thumbnail/canva-robot-avatar-MAB6v9eTAHs.png',
                'https://upload.wikimedia.org/wikipedia/commons/d/d9/Avatar_robot_head.png',
                'http://www.clker.com/cliparts/H/e/F/a/2/K/blue-robot-md.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png/202px-Robot-clip-art-book-covers-feJCV3-clipart.png',
                'https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png',
                'https://marketplace.canva.com/MAB6vzmEQlA/1/thumbnail/canva-robot-electric-avatar-icon-MAB6vzmEQlA.png'
            ]
        }
    },
    methods : {
        mudar(src){
            this.selecionado = src
            this.$emit('novaImagem',src)
        }
    }
}
</script>
<style>
.is-click{
    cursor: pointer;   
}
</style>

