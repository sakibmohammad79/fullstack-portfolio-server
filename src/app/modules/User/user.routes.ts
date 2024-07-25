import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidationSchemas } from "./user.validation";

const router = Router();

router.get("/", userController.getAdmin);

router.post(
  "/",
  validateRequest(UserValidationSchemas.createUserValidationSchema),
  userController.createAdmin
);

router.patch(
  "/:id",
  validateRequest(UserValidationSchemas.updateUserValidationSchema),
  userController.updateAdmin
);

export const userRoutes = router;
