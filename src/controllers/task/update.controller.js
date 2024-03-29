import { Task } from "../../models/index.js";

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  try {
    const updated = await Task.findByIdAndUpdate(id, data);
    return updated
      ? res.status(200).json({ msg: "La tarea fue actualizada con éxito" })
      : res.status(400).json({
          msg: "No se ha podido actualizar la tarea",
        });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
