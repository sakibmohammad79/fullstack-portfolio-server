import { Router } from "express";
import { ProjectController } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidationSchemas } from "./project.validation";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/authGurd";

const router = Router();

router.get("/", ProjectController.getProject);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(ProjectValidationSchemas.createProjectValidationSchema),
  ProjectController.createProject
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(ProjectValidationSchemas.updateProjectValidationSchema),
  ProjectController.updateProject
);

router.delete("/:id", ProjectController.deleteProject);

export const projectRoutes = router;
