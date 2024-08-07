"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFoundHandler_1 = __importDefault(require("./app/middlewares/notFoundHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
app.use((0, cors_1.default)({
    origin: "https://my-portfolio-client-xi.vercel.app",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("My portfolio server is runing!!!");
});
app.use("/api/v1", routes_1.default);
app.use(globalErrorHandler_1.default);
app.use(notFoundHandler_1.default);
exports.default = app;
