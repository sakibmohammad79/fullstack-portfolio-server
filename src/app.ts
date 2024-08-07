import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundHandler from "./app/middlewares/notFoundHandler";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: "https://my-portfolio-client-xi.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("My portfolio server is runing!!!");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.use(notFoundHandler);

export default app;
