<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{ comment.autor }}</strong>
                        <br/> {{ comment.conteudo }}
                    </p>
                </div>
            </div>
            <div class="media-right">
                <small>{{ comment.data }}</small>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    props: ['comment']
}
</script>
