import { Task } from "../../models/index.js";

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (task) {
      task.status = "Eliminada";
      await task.save();
      return res.status(200).json({
        msg: `La tarea se ha eliminado con éxito`,
      });
    }
    return res.status(400).json({
      msg: "Tarea a eliminar no encontrada",
    });
  } catch (error) {}
};
