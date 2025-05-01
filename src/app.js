const express = require('express');
const cors = require('cors');

const clienteRoutes = require('./cliente/clienteRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas do cliente
app.use('/clientes', clienteRoutes);

// Porta padrão
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
