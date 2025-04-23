// Importar librerías base con ES Modules
import express from 'express';
import cors from 'cors';

// Importar módulos internos con extensión .js
import authJwt from './middlewares/auth.js';
import conexion from './models/bd_conexion.js';
import productoRta from './routes/productos.js';
import usuariosRta from './routes/usuarios.js';
import categoriasRta from './routes/categorias.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
await conexion();

// Middleware de autenticación (si aplica)
authJwt(app);

// Rutas
app.use("/api", productoRta);
app.use("/api", usuariosRta);
app.use("/api", categoriasRta);

// Inicio del servidor
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto 4000`);
});
