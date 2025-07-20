import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidationSchemas } from "./user.validation";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/authGurd";

const router = Router();

router.get("/", userController.getAdmin);

router.post(
  "/",
  // auth(UserRole.ADMIN),
  validateRequest(UserValidationSchemas.createUserValidationSchema),
  userController.createAdmin
);

router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(UserValidationSchemas.updateUserValidationSchema),
  userController.updateAdmin
);

export const userRoutes = router;
