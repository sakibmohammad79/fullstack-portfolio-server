import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.routes";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("My portfolio server is runing!!!");
});

export default app;
