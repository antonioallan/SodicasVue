
export default class DicaService {

    constructor(http) {
        this._path = "dica"
        this._http = http;
    }

    lancamento(offset) {
        let limit = 3
        return this._http.get(`${this._path}/lancamento?limit=${limit}&offset=${offset}`)
            .then(res => res.json());
    }

    carregar(id) {
        return this._http.get(`${this._path}/${id}`)
            .then(res => res.json());
    }

    buscarPor(autor){
        return this._http.get(`${this._path}/autor/${autor.id}`)
        .then(res => res.json());
    }
    cadastrar(dica){
        return this._http.post(this._path,dica,{
            headers: {
                'Restrito' : true
            }
        }).then(res => res.json())
    }
} 