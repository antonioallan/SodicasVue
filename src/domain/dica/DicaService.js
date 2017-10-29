import SecurityService from '../seguranca/SecurityService'
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

    filtrar(dados,offset) {
        let limit = 3
        return this._http.post(`${this._path}/filtro/${limit}/${offset}`,dados)
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
        return this._http.post(this._path,dica,SecurityService.getHeaderSecurity()).then(res => res.json())
    }

    alterar(dica){
        return this._http.put(this._path,dica,SecurityService.getHeaderSecurity()).then(res => res.json())
    }

    remove(dica){
        return this._http.delete(`${this._path}/${dica.id}`,SecurityService.getHeaderSecurity()).then(res => res.json())
    }


    votar(voto){
        return this._http.post(`${this._path}/votar`,voto).then(res => res.json())
    }


} 