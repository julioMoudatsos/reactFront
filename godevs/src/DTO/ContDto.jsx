class ContDto {
    constructor(name, email, cpfCNPJ, senha) {
        this.name = name;
        this.email = email;
        this.senha = senha;
        this.cpfCNPJ = cpfCNPJ.replace(/[.]|[-]/g,'');
    }

}


export default ContDto;