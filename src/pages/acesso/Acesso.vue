<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 bg-success area-user">
            <card-user/>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
            <form-sigup :alterar="true"/>
        </div>
    </div>
</template>
<script>
import FormSigup from '../../componets/sigup/FormSigup.vue'
import CardUser from '../../componets/shared/card-user/CardUser.vue'
export default {
    components : {
        'form-sigup' : FormSigup,
        'card-user': CardUser
    }
}
</script>
<style scopedSlots>
    .area-user{
        height: 100vh;
    }
</style>