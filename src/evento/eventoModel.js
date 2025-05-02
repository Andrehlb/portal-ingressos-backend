// classe para representar um evento em memória, mas está desativada (comentada) porque agora estou usando banco de dados.

/* class Evento {
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
*/
const { Pool } = require('pg');
require('dotenv').config();

// Cria pool de conexões com base nas variáveis do .env
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// CREATE
async function criar(dto) {
  const query = `
    INSERT INTO eventos (nome, tipo, data, hora, local, disponibilidade)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
  const values = [
    dto.nome,
    dto.tipo,
    dto.data,
    dto.hora,
    dto.local,
    dto.descricao,
    dto.disponibilidade,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// READ ALL
async function listar() {
  const result = await pool.query('SELECT * FROM eventos ORDER BY id;');
  return result.rows;
}

// READ BY ID
async function buscar(id) {
  const result = await pool.query('SELECT * FROM eventos WHERE id = $1;', [id]);
  return result.rows[0] || null;
}

// UPDATE
async function atualizar(id, dto) {
  const query = `
    UPDATE eventos
    SET nome = $1, tipo = $2, data = $3, local = $4, disponibilidade = $5
    WHERE id = $6
    RETURNING *;
  `;
  const values = [
    dto.nome,
    dto.tipo,
    dto.data,
    dto.local,
    dto.disponibilidade,
    id,
  ];
  const result = await pool.query(query, values);
  return result.rows[0] || null;
}

// DELETE
async function remover(id) {
  const result = await pool.query('DELETE FROM eventos WHERE id = $1;', [id]);
  return result.rowCount > 0;
}

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  remover,
};
