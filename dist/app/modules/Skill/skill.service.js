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
exports.SkillService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createSkillIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createSkill = yield prisma_1.default.skill.create({
        data: payload,
    });
    return createSkill;
});
const getSkillFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const allSkill = yield prisma_1.default.skill.findMany();
    return allSkill;
});
const updateSkillIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const skill = yield prisma_1.default.skill.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const updateSkill = yield prisma_1.default.skill.update({
        where: {
            id: skill.id,
        },
        data: payload,
    });
    return updateSkill;
});
const deleteSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const skillData = yield prisma_1.default.skill.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const deleteSkill = yield prisma_1.default.skill.delete({
        where: {
            id: skillData.id,
        },
    });
    return deleteSkill;
});
exports.SkillService = {
    createSkillIntoDB,
    updateSkillIntoDB,
    getSkillFromDB,
    deleteSkillFromDB,
};
