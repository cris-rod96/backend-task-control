import mongoose from "mongoose";
const { model, models, Schema } = mongoose;

const priorities = ["Alta", "Media", "Baja", "Urgente", "Crítica"];
const states = ["En curso", "Completada", "Cancelada", "Eliminada"];

const TasKSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la tarea es obligatorio"],
    },
    priority: {
      type: String,
      enum: priorities,
    },
    status: {
      type: String,
      enum: states,
      default: "En curso",
    },
  },
  {
    timestamps: false,
  }
);

export default models.Task || model("Task", TasKSchema);
