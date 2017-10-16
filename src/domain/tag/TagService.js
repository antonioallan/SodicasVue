import SecurityService from '../seguranca/SecurityService'
export default class TagService{
    
    constructor(http){
        this._path = 'tag'
        this._http = http
        this._security = new SecurityService(http);
    }

    cadastrar(tag){
        let user = this._security.usuarioLogado()
        return this._http.post(this._path,tag,{
            headers :{
                'Restrito' : 'true',
                'Authentication' : user.token
            }
        }).then(res => res.json(),err => {
            this._security.logout();
        })
    }

    buscar(){
        return this._http.get(this._path)
        .then(rs => rs.json())
    }
}