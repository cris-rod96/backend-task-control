import { Router } from "express";
import taskRoutes from "./task/index.js";

const router = Router();

router.use("/tasks", taskRoutes);

export default router;
