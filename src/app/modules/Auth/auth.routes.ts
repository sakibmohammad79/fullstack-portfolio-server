import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthValidationSchemas } from "./auth.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidationSchemas.loginValidationSchema),
  AuthController.loginUser
);

export const authRoutes = router;
