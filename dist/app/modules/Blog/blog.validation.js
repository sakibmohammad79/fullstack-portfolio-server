"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidationSchemas = void 0;
const zod_1 = require("zod");
const createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.number().int().optional(),
        title: zod_1.z.string(),
        content: zod_1.z.string(),
        published: zod_1.z.boolean().default(false),
        userId: zod_1.z.string(),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date().optional(),
    }),
});
const updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.number().int().optional(),
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        published: zod_1.z.boolean().default(false).optional(),
        userId: zod_1.z.string().optional(),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date().optional(),
    }),
});
exports.BlogValidationSchemas = {
    createBlogValidationSchema,
    updateBlogValidationSchema,
};
