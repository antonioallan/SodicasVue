<template>
    <div class="card card-div">
        <div class="card-header bg-success text-white">
            Cadastrar
        </div>
        <div class="card-body">
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
                    <input v-model="usuario.username" :disabled="alterar" class="form-control" type="text" placeholder="username" />
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <input v-model="usuario.email" class="form-control" type="email" placeholder="Email">
                    <span class="input-group-addon">
                        <i class="fa fa-check"></i>
                    </span>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-lock"></i>
                    </span>
                    <input v-model="usuario.senha" class="form-control" type="password" placeholder="senha" />
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-lock"></i>
                    </span>
                    <input @blur="checarSenha()" class="form-control" v-model="confsenha" :class="{'is-invalid' : !valido}" type="password" placeholder="repetir senha" />
                    <span class="input-group-addon">
                        <i class="fa" :class="[valido ? 'fa-check is-valid' : 'fa-exclamation-triangle is-invalid']"></i>
                    </span>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="salvar()">
                    Salvar
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Usuario from "../../domain/usuario/Usuario";
import UsuarioService from "../../domain/usuario/UsuarioService";
import message from "../../events/message/message";
export default {
  props: ["alterar"],
  created() {
    this.service = new UsuarioService(this.$http);
  },
  mounted() {
    console.log(this.alterar);
    if (this.alterar) {
      this.usuario = UsuarioService.getUsuario();
    }
  },
  data() {
    return {
      usuario: new Usuario("", "", ""),
      valido: true,
      confsenha: ""
    };
  },
  methods: {
    checarSenha() {
      this.valido = this.usuario.senha == this.confsenha;
    },
    salvar() {
      if (this.valido) {
        this.service.cadastrar(this.usuario).then(
          dado => {
            let tipo = dado.tipo == 1 ? "success" : "info";
            message.$emit("show", { message: "Operação realizada com sucesso", tipo: "success" });
            this.usuario = new Usuario();
            this.$router.push({ name: "login" });
          },
          err => message.$emit("show", { message: err.msg, tipo: "danger" })
        );
      }
    }
  }
};
</script>
<style scopedSlots>
.card-div {
  margin: 15px;
}
</style>