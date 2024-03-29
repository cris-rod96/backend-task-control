import { Router } from "express";
import { taskControllers } from "../../controllers/index.js";

const router = Router();

router.get("/list", taskControllers.getTasks);
router.post("/create", taskControllers.createTask);
router.put("/edit/:id", taskControllers.updateTask);
router.delete("/delete/:id", taskControllers.deleteTask);

export default router;
