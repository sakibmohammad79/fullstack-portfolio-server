"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const notFoundHandler = (req, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!",
        },
    });
};
exports.default = notFoundHandler;
