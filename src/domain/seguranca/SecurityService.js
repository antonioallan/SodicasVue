import {KEY_LOCALSTOREGE_USER,HEADER_AUTH} from './SecurityConstants'
import security from '../../events/seguranca/security'
export default class SecurityService{
     constructor(http,router){
         this._path = "security";
         this._http = http;
         this._router = router;
     }

    login(credencias){
        return this._http.post(`${this._path}/login`,credencias)
        .then(dados => dados.json())
        .then(user => {
            localStorage.setItem(KEY_LOCALSTOREGE_USER,JSON.stringify(user))
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
        security.$emit("logout");
        this._router.push({name : 'login'})
    }


}