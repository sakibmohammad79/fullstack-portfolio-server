import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/", userController.createAdmin);

router.get("/", userController.getAdmin);

export const userRoutes = router;
