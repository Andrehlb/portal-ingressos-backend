const EventoDTO = require('./eventoDTO');
const service = require('./eventoService');

const criar = (req, res) => {
  const dto = new EventoDTO(req.body);
  const eventoCriado = service.criar(dto);
  res.status(201).json(eventoCriado);
};

const listar = (req, res) => {
  const eventos = service.listar();
  res.json(eventos);
};

const buscar = (req, res) => {
  const id = parseInt(req.params.id);
  const evento = service.buscar(id);

  if (!evento) {
    return res.status(404).json({ erro: 'Evento não encontrado' });
  }

  res.json(evento);
};

const atualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const dto = new EventoDTO(req.body);
  const eventoAtualizado = service.atualizar(id, dto);

  if (!eventoAtualizado) {
    return res.status(404).json({ erro: 'Evento não encontrado' });
  }

  res.json(eventoAtualizado);
};

const remover = (req, res) => {
  const id = parseInt(req.params.id);
  const removido = service.remover(id);

  if (!removido) {
    return res.status(404).json({ erro: 'Evento não encontrado' });
  }

  res.status(204).send();
};

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  remover
};

