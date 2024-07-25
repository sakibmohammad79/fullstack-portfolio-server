import { NextFunction, Request, RequestHandler, Response } from "express";
import { userService } from "./user.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../shared/sendResponse";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.createAdmin(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin created successfully!",
    data: result,
  });
});

const getAdmin: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.getAdminFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin data fetched successfully!",
    data: result,
  });
});

export const userController = {
  createAdmin,
  getAdmin,
};
