import { Task } from "../../models/index.js";

export const getTasks = async (req, res) => {
  try {
    const { status = "all" } = req.query;
    const tasks = await Task.find(status === "all" ? {} : { status });
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
