<template>
    <div class="modal" :class="{'is-active' : visible }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header"></slot>
                </p>
                <button class="delete" @click="hideModal()" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot name="body"></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
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
