// Importar express y router
import express from 'express';
const router = express.Router();

// Importar el controlador correspondiente usando ES6
import * as categoriasCtr from '../controllers/categorias.js';

// Rutas de la API
router.get('/categorias/listartodas', categoriasCtr.listartodas);
router.post('/categorias/nueva', categoriasCtr.nueva);

// Exportar el router
export default router;
