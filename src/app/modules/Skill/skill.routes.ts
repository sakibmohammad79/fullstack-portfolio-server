import { Router } from "express";

import { SkillController } from "./skill.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SkillValidationShemas } from "./skill.validation";
import auth from "../../middlewares/authGurd";
import { UserRole } from "@prisma/client";

const router = Router();

router.get("/", SkillController.getSkill);

router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(SkillValidationShemas.createSkillValidationSchema),
  SkillController.createSkill
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(SkillValidationShemas.updateSkillValidationSchema),
  SkillController.updateSkill
);

router.delete("/:id", SkillController.deleteSkill);

export const skillRoutes = router;
