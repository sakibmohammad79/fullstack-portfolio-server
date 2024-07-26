"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRoutes = void 0;
const express_1 = require("express");
const skill_controller_1 = require("./skill.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const skill_validation_1 = require("./skill.validation");
const router = (0, express_1.Router)();
router.get("/", skill_controller_1.SkillController.getSkill);
router.post("/", (0, validateRequest_1.default)(skill_validation_1.SkillValidationShemas.createSkillValidationSchema), skill_controller_1.SkillController.createSkill);
router.patch("/:id", (0, validateRequest_1.default)(skill_validation_1.SkillValidationShemas.updateSkillValidationSchema), skill_controller_1.SkillController.updateSkill);
router.delete("/:id", skill_controller_1.SkillController.deleteSkill);
exports.skillRoutes = router;
