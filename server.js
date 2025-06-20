const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simula recebimento de pedidos
app.post('/api/pedido', (req, res) => {
  const pedido = req.body;
  console.log('Novo pedido recebido:', pedido);

  res.status(200).send({message: 'Pedido recebido com sucesso!'});
});

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
