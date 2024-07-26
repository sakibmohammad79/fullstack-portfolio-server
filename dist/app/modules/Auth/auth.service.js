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
exports.AuthService = void 0;
const http_status_codes_1 = require("http-status-codes");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const apiError_1 = __importDefault(require("../../error/apiError"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwtHelper_1 = require("../../../helper/jwtHelper");
const config_1 = __importDefault(require("../../../config"));
const loginUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield prisma_1.default.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (!admin) {
        throw new apiError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Admin does not exists!");
    }
    //check password
    const isPasswordCorrect = yield bcrypt_1.default.compare(payload.password, admin.password);
    if (!isPasswordCorrect) {
        throw new apiError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Password not correct!");
    }
    const jwtPayload = {
        adminId: admin.id,
        email: admin.email,
        role: admin.role,
    };
    const accessToken = jwtHelper_1.jwtHelpers.generateToken(jwtPayload, config_1.default.jwt.access_token_secret, config_1.default.jwt.access_token_expires_in);
    const refreshToken = jwtHelper_1.jwtHelpers.generateToken(jwtPayload, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    let decodedData;
    try {
        decodedData = jwtHelper_1.jwtHelpers.verifyToken(refreshToken, config_1.default.jwt.refresh_token_secret);
    }
    catch (err) {
        throw new apiError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized!");
    }
    const userData = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: decodedData === null || decodedData === void 0 ? void 0 : decodedData.email,
        },
    });
    const jwtPayload = {
        adminId: userData.id,
        email: userData.email,
        role: userData.role,
    };
    const accessToken = jwtHelper_1.jwtHelpers.generateToken(jwtPayload, config_1.default.jwt.access_token_secret, config_1.default.jwt.access_token_expires_in);
    return {
        accessToken,
    };
});
exports.AuthService = {
    loginUserIntoDB,
    refreshToken,
};
