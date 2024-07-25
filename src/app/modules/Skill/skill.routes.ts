import { Router } from "express";

import { SkillController } from "./skill.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SkillValidationShemas } from "./skill.validation";

const router = Router();

router.get("/", SkillController.getSkill);

router.post(
  "/",
  validateRequest(SkillValidationShemas.createSkillValidationSchema),
  SkillController.createSkill
);
router.patch(
  "/:id",
  validateRequest(SkillValidationShemas.updateSkillValidationSchema),
  SkillController.updateSkill
);

router.delete("/:id", SkillController.deleteSkill);

export const skillRoutes = router;
