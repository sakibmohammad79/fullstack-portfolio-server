import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogController } from "./blog.controller";
import { BlogValidationSchemas } from "./blog.validation";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/authGurd";

const router = Router();

router.get("/", BlogController.getBlog);

router.get("/:id", BlogController.getSingleBlog);

router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(BlogValidationSchemas.createBlogValidationSchema),
  BlogController.createBlog
);

router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(BlogValidationSchemas.updateBlogValidationSchema),
  BlogController.updateBlog
);

router.delete("/:id", BlogController.deleteBlog);

export const blogRoutes = router;
