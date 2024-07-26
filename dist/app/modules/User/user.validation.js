"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchemas = void 0;
const zod_1 = __importDefault(require("zod"));
const adminSchema = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    designation: zod_1.default.string(),
    resumeUrl: zod_1.default.string().url(),
    image: zod_1.default.string().url().optional(),
    introduction: zod_1.default.string().optional(),
});
const createUserValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string().min(6),
        admin: adminSchema,
    }),
});
const updateAdminSchema = zod_1.default.object({
    name: zod_1.default.string().optional(),
    email: zod_1.default.string().email().optional(),
    designation: zod_1.default.string().optional(),
    resumeUrl: zod_1.default.string().url().optional(),
    image: zod_1.default.string().url().optional(),
    introduction: zod_1.default.string().optional(),
});
const updateUserValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string().min(6).optional(),
        admin: updateAdminSchema.optional(),
    }),
});
exports.UserValidationSchemas = {
    createUserValidationSchema,
    updateUserValidationSchema,
};
