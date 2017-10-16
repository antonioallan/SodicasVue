import Autor from '../autor/Autor'
export default class Usuario{
     constructor(username,email,senha){
        this.username = username
        this.email = email
        this.senha = senha
        this.autor = null;
    }
}