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
exports.ProjectService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createProjectIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield prisma_1.default.project.create({
        data: payload,
    });
    return project;
});
const getAllProjectFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const allProject = yield prisma_1.default.project.findMany();
    return allProject;
});
const getSingleProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleProject = yield prisma_1.default.project.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return singleProject;
});
const updateProjectIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield prisma_1.default.project.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const updateProject = yield prisma_1.default.project.update({
        where: {
            id: projectData.id,
        },
        data: payload,
    });
    return updateProject;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield prisma_1.default.project.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const deletedProject = yield prisma_1.default.project.delete({
        where: {
            id: project.id,
        },
    });
    return deletedProject;
});
exports.ProjectService = {
    createProjectIntoDB,
    getAllProjectFromDB,
    getSingleProjectFromDB,
    updateProjectIntoDB,
    deleteProjectFromDB,
};
