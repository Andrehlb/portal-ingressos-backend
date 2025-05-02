// 2o formato src/evento/eventoService.js vai usar as funções do src/evento/eventoModel.js com PostGreSQ, no lugar da versão anterior para manipular os dados dos eventos.
const EventoModel = require('./eventoModel');

async function criar(dto) {
  return await EventoModel.criar(dto);
}

async function listar() {
  return await EventoModel.listar();
}

async function buscar(id) {
  return await EventoModel.buscar(id);
}

async function atualizar(id, dto) {
  return await EventoModel.atualizar(id, dto);
}

async function remover(id) {
  return await EventoModel.remover(id);
}

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  remover
};



// 1o formato src/evento/eventoService.js Acessar endpoint: http://localhost:3000/eventos
/*
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
*/
