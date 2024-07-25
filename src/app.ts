import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes";
import { StatusCodes } from "http-status-codes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundHandler from "./app/middlewares/notFoundHandler";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("My portfolio server is runing!!!");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.use(notFoundHandler);

export default app;
