class ClienteDTO {
    constructor({ nome, cpf, email }) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}

module.exports = ClienteDTO;