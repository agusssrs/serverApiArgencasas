const fetch = require('node-fetch');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ mensaje: 'Método no permitido' });
  }

  try {
    const apiUrl = 'https://api.argencasas.com/props?api_key=6b8d4ba4dfdeadbe7ffe3ba8e40cb162';

    const response = await fetch(apiUrl);
    const data = await response.json();

    const propiedades = data.map(p => ({
      id: p.id,
      tipo: p.type,
      operacion: p.operation,
      precio: `${p.currency} ${p.price}`,
      direccion: `${p.street} ${p.number}`,
      imagen: p.images?.[0] || '',
      descripcion: p.description,
    }));

    return res.status(200).json(propiedades);

  } catch (error) {
    console.error('Error al conectar con la API externa:', error);
    return res.status(500).json({ mensaje: 'Error al conectar con la API externa' });
  }
};
