"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("../modules/User/user.routes");
const auth_routes_1 = require("../modules/Auth/auth.routes");
const skill_routes_1 = require("../modules/Skill/skill.routes");
const blog_routes_1 = require("../modules/Blog/blog.routes");
const project_routes_1 = require("../modules/Project/project.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/auth",
        route: auth_routes_1.authRoutes,
    },
    {
        path: "/skill",
        route: skill_routes_1.skillRoutes,
    },
    {
        path: "/blog",
        route: blog_routes_1.blogRoutes,
    },
    {
        path: "/project",
        route: project_routes_1.projectRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
