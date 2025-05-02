class EventoDTO {
    constructor({ nome, tipo, data, local, disponibilidade }) {
      this.nome = nome;
      this.tipo = tipo;
      this.data = data;
      this.hora = hora;
      this.local = local;
      this.descricao = descricao;
      this.disponibilidade = disponibilidade;
    }
  }
  
  module.exports = EventoDTO;
  