import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../shared/sendResponse";

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.createAdmin(req.body);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Admin created successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getAdminFromDB();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Admin data fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userController = {
  createAdmin,
  getAdmin,
};
