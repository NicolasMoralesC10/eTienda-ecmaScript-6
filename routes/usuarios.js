// Importar librerías con ES Modules
import express from 'express';
import multer from 'multer';

// Importar el controlador de usuarios
import * as usuariosCtr from '../controllers/usuarios.js';

// Crear router
const router = express.Router();

// Configuración de multer para emular almacenamiento local
const storage = multer.diskStorage({
  // Ruta de destino para almacenar los archivos
  destination: (req, file, cb) => {
    cb(null, './uploads/usuarios/');
  },
  // Nombre del archivo
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Instancia de multer con configuración
const uploads = multer({ storage });

// Rutas
router.get('/usuarios/listartodos', usuariosCtr.listartodos);
router.post('/usuarios/registro', usuariosCtr.registro);
router.post('/usuarios/login', usuariosCtr.login);
router.post('/usuarios/subirimagen/', uploads.single('file0'), usuariosCtr.subirImagen);
router.get('/usuarios/avatar/:file', usuariosCtr.avatar);

// Exportar router
export default router;
