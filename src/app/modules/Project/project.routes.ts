import { Router } from "express";
import { ProjectController } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidationSchemas } from "./project.validation";

const router = Router();

router.get("/", ProjectController.getProject);
router.post(
  "/",
  validateRequest(ProjectValidationSchemas.createProjectValidationSchema),
  ProjectController.createProject
);
router.patch(
  "/:id",
  validateRequest(ProjectValidationSchemas.updateProjectValidationSchema),
  ProjectController.updateProject
);

router.delete("/:id", ProjectController.deleteProject);

export const projectRoutes = router;
