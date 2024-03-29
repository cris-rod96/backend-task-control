import { Task } from "../../models/index.js";

export const createTask = async (req, res) => {
  try {
    const data = req.body;
    const newTask = await Task.create(data);
    return res.status(200).json({
      msg: `Tarea creada con éxito`,
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
