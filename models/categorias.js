// Importar mongoose y desestructurar Schema y model
import { Schema, model } from 'mongoose';

// Definir el esquema
const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  icono: {
    type: String,
  },
  color: {
    type: String,
  },
});

// Crear el modelo
const Categoria = model('Categoria', categoriaSchema);

// Exportar el modelo
export default Categoria;
