"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidationSchemas = void 0;
const zod_1 = __importDefault(require("zod"));
const createProjectValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string(),
        image: zod_1.default.string(),
        description: zod_1.default.string(),
        details: zod_1.default.string(),
        technology: zod_1.default.string(),
        url: zod_1.default.string(),
        repoClientUrl: zod_1.default.string(),
        repoServerUrl: zod_1.default.string(),
        startDate: zod_1.default.string(),
        endDate: zod_1.default.string(),
        userId: zod_1.default.string(),
    }),
});
const updateProjectValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string().optional(),
        image: zod_1.default.string().optional(),
        description: zod_1.default.string().optional(),
        details: zod_1.default.string().optional(),
        technology: zod_1.default.string().optional(),
        url: zod_1.default.string().optional(),
        repoClientUrl: zod_1.default.string().optional(),
        repoServerUrl: zod_1.default.string().optional(),
        startDate: zod_1.default.string().optional(),
        endDate: zod_1.default.string().optional(),
        userId: zod_1.default.string().optional(),
    }),
});
exports.ProjectValidationSchemas = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
