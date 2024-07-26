"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const client_1 = require("@prisma/client");
const authGurd_1 = __importDefault(require("../../middlewares/authGurd"));
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.getAdmin);
router.post("/", (0, authGurd_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(user_validation_1.UserValidationSchemas.createUserValidationSchema), user_controller_1.userController.createAdmin);
router.patch("/:id", (0, authGurd_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(user_validation_1.UserValidationSchemas.updateUserValidationSchema), user_controller_1.userController.updateAdmin);
exports.userRoutes = router;
