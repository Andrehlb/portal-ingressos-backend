const Evento = require('./eventoModel');

let eventos = [];
let idAtual = 1;

function criar(dto) {
  const evento = new Evento(
    idAtual++,
    dto.nome,
    dto.tipo,
    dto.data,
    dto.local,
    dto.disponibilidade
  );
  eventos.push(evento);
  return evento;
}

function listar() {
  return eventos;
}

function buscar(id) {
  return eventos.find(e => e.id === id);
}

function atualizar(id, dto) {
  const evento = buscar(id);
  if (!evento) {
    return null;
  }

  evento.nome = dto.nome;
  evento.tipo = dto.tipo;
  evento.data = dto.data;
  evento.local = dto.local;
  evento.disponibilidade = dto.disponibilidade;

  return evento;
}

function remover(id) {
  const index = eventos.findIndex(e => e.id === id);
  if (index !== -1) {
    eventos.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  remover
};
