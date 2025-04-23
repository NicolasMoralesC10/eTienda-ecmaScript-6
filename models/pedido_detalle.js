import { Schema, model } from "mongoose";

const pedido_detalleSchema = new Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  producto: {
    type: Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  pedido: {
    type: Schema.Types.ObjectId,
    ref: "Pedido",
    required: true,
  },
});

const PedidoDetalle = model("PedidoDetalle", pedido_detalleSchema);

export default PedidoDetalle;
