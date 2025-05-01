class Evento {
    constructor(id, nome, tipo, data, local, disponibilidade) {
      this.id = id;
      this.nome = nome;
      this.tipo = tipo; // 'cinema' ou 'show'
      this.data = data; // formato ISO: '2025-05-04T20:00:00'
      this.local = local;
      this.disponibilidade = disponibilidade;
    }
  }
  
  module.exports = Evento;
  