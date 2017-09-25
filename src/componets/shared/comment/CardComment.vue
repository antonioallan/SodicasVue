<template>
    <div class="card card-div">
        <div class="card-body">
            <div class="card-title">
                <h5>{{ comment.autor }}</h5>
            </div>
            <p class="card-text">{{ comment.conteudo }}</p>
            <div>
                <small>{{ comment.data }}</small>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['comment']
}
</script>
<style scopedSlots>
.card-div{
        margin-bottom: 15px;
    }
</style>
