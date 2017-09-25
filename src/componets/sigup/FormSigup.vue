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
                                    <input v-model="usuario.username" class="form-control" type="text" placeholder="username" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                    <input class="form-control" type="email" placeholder="Email">
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
                                <button class="btn btn-primary">
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </div>
</template>
<script>
export default {
  
}
</script>
