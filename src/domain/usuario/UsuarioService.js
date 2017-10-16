import SecurityService from '../seguranca/SecurityService'
import {HEADER_AUTH,ACESSO_RESTRITO} from '../seguranca/SecurityConstants'
import {USER_LODADO_KEY} from './UsuarioConstants'
export default class UsuarioService{

    constructor(http){
        this._path = "usuario"
        this._http = http
        this._security = new SecurityService()
    }

    cadastrar(usuario){
        if(usuario.username){
            return this._http.put(this._path,usuario).then(res => res.json());    
        }
        return this._http.post(this._path,usuario).then(res => res.json());
    }

    buscaUsuario(){
        let user = this._security.usuarioLogado()
        return this._http.get(`${this._path}/${user.username}`,{
            headers : {
                'Restrito' : "true",
                'Authentication' : user.token
            }
        }).then(usuario => usuario.json(),err => {
            this._security.logout()
            security.$emit("logout");
        }).then(user => {
            localStorage.setItem(USER_LODADO_KEY,JSON.stringify(user));
        },err => {
            this._security.logout()
        })
    }
    getUsuario(){
        return JSON.parse(localStorage.getItem(USER_LODADO_KEY))
    }
}