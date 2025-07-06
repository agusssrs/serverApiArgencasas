const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/props', async (req, res) => {
  try {
    const response = await fetch('https://api.argencasas.com/props?api_key=6b8d4ba4dfdeadbe7ffe3ba8e40cb162');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${PORT}`);
});