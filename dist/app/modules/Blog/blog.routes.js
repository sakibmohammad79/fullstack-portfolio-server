"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_controller_1 = require("./blog.controller");
const blog_validation_1 = require("./blog.validation");
const client_1 = require("@prisma/client");
const authGurd_1 = __importDefault(require("../../middlewares/authGurd"));
const router = (0, express_1.Router)();
router.get("/", blog_controller_1.BlogController.getBlog);
router.post("/", (0, authGurd_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(blog_validation_1.BlogValidationSchemas.createBlogValidationSchema), blog_controller_1.BlogController.createBlog);
router.patch("/:id", (0, authGurd_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(blog_validation_1.BlogValidationSchemas.updateBlogValidationSchema), blog_controller_1.BlogController.updateBlog);
router.delete("/:id", blog_controller_1.BlogController.deleteBlog);
exports.blogRoutes = router;
