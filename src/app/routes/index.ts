import { Router } from "express";
import { userRoutes } from "../modules/User/user.routes";
import { authRoutes } from "../modules/Auth/auth.routes";
import { skillRoutes } from "../modules/Skill/skill.routes";
import { blogRoutes } from "../modules/Blog/blog.routes";
import { projectRoutes } from "../modules/Project/project.routes";
import { contactMessageRoutes } from "../modules/Contact/contact.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/skill",
    route: skillRoutes,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
  {
    path: "/project",
    route: projectRoutes,
  },
  {
    path: "/contacts",
    route: contactMessageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
