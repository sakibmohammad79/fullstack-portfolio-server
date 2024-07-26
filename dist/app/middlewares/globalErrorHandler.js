"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const globalErrorHandler = (error, req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong!",
        error: error,
    });
};
exports.default = globalErrorHandler;
