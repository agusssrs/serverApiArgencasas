// api/props.js

const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ mensaje: 'Método no permitido' });
    return;
  }

  const url = 'https://api.argencasas.com/props?api_key=6b8d4ba4dfdeadbe7ffe3ba8e40cb162';

  https.get(url, (apiRes) => {
    let data = '';

    apiRes.on('data', chunk => {
      data += chunk;
    });

    apiRes.on('end', () => {
      try {
        const parsed = JSON.parse(data);

        // Podés filtrar/transformar si querés:
        const propiedades = parsed.map(p => ({
          id: p.id,
          tipo: p.type,
          operacion: p.operation,
          precio: `${p.currency} ${p.price}`,
          direccion: `${p.street} ${p.number}`,
          imagen: p.images[0], // primera imagen
          descripcion: p.description,
        }));

        res.status(200).json(propiedades);
      } catch (error) {
        console.error("Error al parsear datos:", error);
        res.status(500).json({ mensaje: 'Error procesando datos' });
      }
    });

  }).on('error', (err) => {
    console.error("Error al acceder a la API externa:", err);
    res.status(500).json({ mensaje: 'Error al conectar con API externa' });
  });
};
