const Cliente = require('./clienteModel');

let clientes = [];
let idAtual = 1;

function criarCliente(dto) {
  const novoCliente = new Cliente(idAtual++, dto.nome, dto.cpf, dto.email);
  clientes.push(novoCliente);
  return novoCliente;
}

function listarClientes() {
  return clientes;
}

function buscarPorId(id) {
  return clientes.find(c => c.id === Number(id));
}

function atualizarCliente(id, dto) {
  const cliente = buscarPorId(id);
  if (cliente) {
    cliente.nome = dto.nome;
    cliente.cpf = dto.cpf;
    cliente.email = dto.email;
  }
  return cliente;
}

function deletarCliente(id) {
  const index = clientes.findIndex(c => c.id === Number(id));
  if (index !== -1) {
    clientes.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  criarCliente,
  listarClientes,
  buscarPorId,
  atualizarCliente,
  deletarCliente,
};
