const ClienteDTO = require('./clienteDTO');
const clienteService = require('./clienteService');

function criar(req, res) {
  const dto = new ClienteDTO(req.body);
  const clienteCriado = clienteService.criarCliente(dto);
  res.status(201).json(clienteCriado);
}

function listar(req, res) {
  res.json(clienteService.listarClientes());
}

function buscar(req, res) {
  const cliente = clienteService.buscarPorId(req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  res.json(cliente);
}

function atualizar(req, res) {
  const dto = new ClienteDTO(req.body);
  const atualizado = clienteService.atualizarCliente(req.params.id, dto);
  if (!atualizado) return res.status(404).json({ erro: 'Cliente não encontrado' });
  res.json(atualizado);
}

function remover(req, res) {
  const sucesso = clienteService.deletarCliente(req.params.id);
  if (!sucesso) return res.status(404).json({ erro: 'Cliente não encontrado' });
  res.status(204).send();
}

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  remover,
};
