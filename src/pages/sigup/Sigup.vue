<template>
    <div>
        <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
                <h1 class="display-5 text-white">
                    Feliz aquele que transfere o sabe e aprende o que ensina.
                </h1>
                <h2 class="h4 text-white">
                    Cora Carolina.
                </h2>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-5 mx-auto">
                    <form-sigup/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormSigup from '../../componets/sigup/FormSigup.vue'
export default {
    components : {
        'form-sigup' : FormSigup
    }
}
</script>