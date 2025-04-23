// Importar mongoose con ES Modules
import mongoose from "mongoose";

// Función de conexión asíncrona
const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/etienda");
    console.log("¡Conexión exitosa!");
  } catch (error) {
    console.log(`Error en la conexión: ${error}`);
    throw new Error(error);
  }
};

// Exportar con ES Modules
export default conexion;
