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
exports.BlogService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBlogIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            id: payload.userId,
        },
    });
    const createBlog = yield prisma_1.default.blog.create({
        data: payload,
    });
    return createBlog;
});
const getAllBlogFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBlog = yield prisma_1.default.blog.findMany();
    return allBlog;
});
const updateBlogIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const updateBlog = yield prisma_1.default.blog.update({
        where: {
            id: blog.id,
        },
        data: payload,
    });
    return updateBlog;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogData = yield prisma_1.default.blog.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const deleteBlog = yield prisma_1.default.blog.delete({
        where: {
            id: blogData.id,
        },
    });
    return deleteBlog;
});
exports.BlogService = {
    createBlogIntoDB,
    getAllBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
};
