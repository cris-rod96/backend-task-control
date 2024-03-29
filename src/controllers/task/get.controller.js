import { Task } from "../../models/index.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
