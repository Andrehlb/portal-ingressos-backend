// src/config/testaConexao.js

const pool = require('./db');

async function testarConexao() {
  try {
    const resultado = await pool.query('SELECT NOW()');
    console.log('🟢 Conexão bem-sucedida! Data atual do servidor:', resultado.rows[0].now);
  } catch (erro) {
    console.error('🔴 Erro ao conectar com o PostgreSQL:', erro.message);
  } finally {
    pool.end(); // Encerra a conexão após o teste
  }
}

testarConexao();