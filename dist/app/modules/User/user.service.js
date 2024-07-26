"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = payload.admin;
    //password hashed
    const hashedPassword = yield bcrypt_1.default.hash(payload.password, 12);
    //create admin
    const adminData = {
        password: hashedPassword,
        name: admin.name,
        email: admin.email,
        role: client_1.UserRole.ADMIN,
        designation: admin.designation,
        resumeUrl: admin.resumeUrl,
    };
    yield prisma_1.default.user.create({
        data: adminData,
    });
    return adminData;
});
const getAdminFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany();
    return result;
});
const updateAdminIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield prisma_1.default.user.findFirstOrThrow({
        where: {
            id,
        },
    });
    const updateAdmin = yield prisma_1.default.user.update({
        where: {
            email: admin.email,
        },
        data: payload,
    });
    return updateAdmin;
});
exports.userService = {
    createAdmin,
    getAdminFromDB,
    updateAdminIntoDB,
};
