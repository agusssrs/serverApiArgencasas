import fetch from 'node-fetch';

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");


  try {
    const response = await fetch('https://api.argencasas.com/props?api_key=6b8d4ba4dfdeadbe7ffe3ba8e40cb162');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
}
