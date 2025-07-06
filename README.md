# Proxy para evitar CORS - ArgenCasas

Este proyecto es un proxy Node.js que redirige las solicitudes a la API de ArgenCasas, permitiendo evitar el error de CORS cuando se accede desde el navegador.

## Cómo usarlo

### Local
```bash
npm install
npm start
```
Accedé a: http://localhost:3000/props

### Producción (Render / Railway)
1. Subí este proyecto a un repo de GitHub
2. Conectá ese repo a Render.com o Railway.app
3. El deploy va a generar una URL tipo:
   `https://tu-api-render.onrender.com/props`

4. En tu código JavaScript, usá esa URL para hacer fetch sin CORS.# serverApiArgencasas
