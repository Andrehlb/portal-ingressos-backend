class EventoDTO {
    constructor({ nome, tipo, data, local, disponibilidade }) {
      this.nome = nome;
      this.tipo = tipo;
      this.data = data;
      this.local = local;
      this.disponibilidade = disponibilidade;
    }
  }
  
  module.exports = EventoDTO;
  