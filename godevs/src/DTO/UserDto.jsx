class UserDto {
    constructor(name, email, cpf, telefone, nivel, senha, dataNasc) {
        this.name = name;
        this.email = email;
        this.telefone = telefone.replace(/[(]|[)]|[-]/g,'');
        this.senha = senha;
        this.cpf = cpf.replace(/[.]|[-]/g,'');
        this.nivel = nivel;
        this.dataNasc = dataNasc;
    }

}


export default UserDto;