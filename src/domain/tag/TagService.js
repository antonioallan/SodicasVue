export default class TagService{
    
    constructor(http){
        this._path = 'tag'
        this._http = http
    }

    cadastrar(tag){
        return this._http.post(this._path, tag ,{
            headers :{
                'Restrito' : 'true'
            }
        })
    }

    buscar(){
        return this._http.get(this._path)
        .then(rs => rs.json())
    }
}