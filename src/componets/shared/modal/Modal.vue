<template>
    <div class="modal fade" :class="[{'show' : visible}, visible ? 'bloco-block' : 'bloco-none']">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title">
                        <slot name="header"></slot>
                    </p>
                    <button @click="hideModal()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import show from '../../../events/modal/show'
export default {
    props: {
        'name': {
            type: String,
            required: true
        }
    },
    mounted() {
        show.$on("showModal", (name) => {
            if (this.name == name) {
                this.visible = true
            }
        })
        show.$on("hideModal", (name) => {
            if (this.name == name) {
                this.visible = false
            }
        })
    },
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        hideModal() {
            this.visible = false
        }
    }
}
</script>
<style scopedSlots>
    .bloco-block{
        display: block;
    }

    .bloco-none{
        display: none;
    }
</style>
