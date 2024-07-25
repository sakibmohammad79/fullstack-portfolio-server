import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidationSchemas } from "./user.validation";

const router = Router();

router.post(
  "/",
  validateRequest(UserValidationSchemas.createUserValidationSchema),
  userController.createAdmin
);

router.get("/", userController.getAdmin);

export const userRoutes = router;
