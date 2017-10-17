import {KEY_LOCALSTOREGE_USER,HEADER_AUTH} from './SecurityConstants'
import security from '../../events/seguranca/security'
import UsuarioService from '../usuario/UsuarioService'
import Usuario from '../usuario/Usuario'
import AutorService from '../autor/AutorService'
export default class SecurityService{
     constructor(http){
         this._path = "security";
         this._http = http;
     }

    login(credencias){
        return this._http.post(`${this._path}/login`,credencias)
        .then(dados => dados.json())
        .then(user => {
            localStorage.removeItem(KEY_LOCALSTOREGE_USER)
            localStorage.setItem(KEY_LOCALSTOREGE_USER,JSON.stringify({username : user.username, token: user.token}))
            UsuarioService.setUsuario(new Usuario(user.usuario.username,user.usuario.email))
            AutorService.setAutor(user.usuario.autor)
            return user
        })
    }

    isLogado(){
        return localStorage.getItem(KEY_LOCALSTOREGE_USER) ? true : false;
    }

    usuarioLogado(){
        return JSON.parse(localStorage.getItem(KEY_LOCALSTOREGE_USER));
    }

    isValido(){
        let user = JSON.parse(localStorage.getItem(KEY_LOCALSTOREGE_USER))
        return this._http.get(`${this._path}/logado`,{
            headers : { 
                HEADER_AUTH : user.token
            }
        }).then(dado => true, err => false);
    }

    logout(){
        localStorage.removeItem(KEY_LOCALSTOREGE_USER)
        UsuarioService.removeUsuario()
        AutorService.removeAutor()
        security.$emit("logout");
    }


}