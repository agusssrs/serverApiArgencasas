// api/props.js

module.exports = (req, res) => {
  // Configurar encabezados CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const propiedades = [
      {
        id: 1,
        tipo: 'Casa',
        operacion: 'Venta',
        precio: 'USD 120000',
        direccion: 'Calle Falsa 123',
        imagen: 'https://via.placeholder.com/300',
        descripcion: 'Linda casa con patio y cochera.',
      },
      {
        id: 2073,
        tipo: 'Departamento',
        operacion: 'Alquiler',
        precio: 'ARS 250000',
        direccion: 'Av. Siempre Viva 742',
        imagen: 'https://via.placeholder.com/300',
        descripcion: 'Depto moderno de 2 ambientes.',
      }
    ];

    res.status(200).json(propiedades);
  } else {
    res.status(405).json({ mensaje: 'Método no permitido' });
  }
};
