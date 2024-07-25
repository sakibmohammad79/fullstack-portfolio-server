import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogController } from "./blog.controller";
import { BlogValidationSchemas } from "./blog.validation";

const router = Router();

router.get("/", BlogController.getBlog);

router.post(
  "/",
  validateRequest(BlogValidationSchemas.createBlogValidationSchema),
  BlogController.createBlog
);

router.patch(
  "/:id",
  validateRequest(BlogValidationSchemas.updateBlogValidationSchema),
  BlogController.updateBlog
);

router.delete("/:id", BlogController.deleteBlog);

export const blogRoutes = router;
