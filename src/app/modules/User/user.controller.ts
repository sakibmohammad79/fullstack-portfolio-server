import { Request, Response } from "express";
import { userService } from "./user.service";
import { StatusCodes } from "http-status-codes";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userService.createAdmin(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Admin created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error?.name || "Something went wrong, Admin not created!",
      error: error,
    });
  }
};

export const userController = {
  createAdmin,
};
