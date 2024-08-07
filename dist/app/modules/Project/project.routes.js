"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const project_validation_1 = require("./project.validation");
const client_1 = require("@prisma/client");
const authGurd_1 = __importDefault(require("../../middlewares/authGurd"));
const router = (0, express_1.Router)();
router.get("/", project_controller_1.ProjectController.getProject);
router.get("/:id", project_controller_1.ProjectController.getSingleProject);
router.post("/", (0, authGurd_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(project_validation_1.ProjectValidationSchemas.createProjectValidationSchema), project_controller_1.ProjectController.createProject);
router.patch("/:id", (0, authGurd_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(project_validation_1.ProjectValidationSchemas.updateProjectValidationSchema), project_controller_1.ProjectController.updateProject);
router.delete("/:id", project_controller_1.ProjectController.deleteProject);
exports.projectRoutes = router;
