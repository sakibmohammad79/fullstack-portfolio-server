"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillValidationShemas = void 0;
const zod_1 = require("zod");
const createSkillValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        image: zod_1.z.string().optional(),
        parcentage: zod_1.z.number().int().min(0).max(100),
        userId: zod_1.z.string().uuid(),
    }),
});
const updateSkillValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        parcentage: zod_1.z.number().int().min(0).max(100).optional(),
    }),
});
exports.SkillValidationShemas = {
    createSkillValidationSchema,
    updateSkillValidationSchema,
};
