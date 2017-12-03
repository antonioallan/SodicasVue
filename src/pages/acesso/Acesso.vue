<template>
    <div>
        <meu-header/>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 bg-success area-user">
                <card-user :autor="this.autor"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
                <form-sigup :alterar="true"/>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../componets/layout/Header.vue";
import FormSigup from "../../componets/sigup/FormSigup.vue";
import CardUser from "../../componets/shared/card-user/CardUser.vue";
import AutorService from "../../domain/autor/AutorService";
export default {
  components: {
    "meu-header": Header,
    "form-sigup": FormSigup,
    "card-user": CardUser
  },
  data() {
    return { autor: AutorService.getAutor() };
  }
};
</script>
<style scopedSlots>
.area-user {
  height: 100vh;
}
</style>