import { NextFunction, Request, Response } from "express";
import ApiError from "../error/apiError";
import { StatusCodes } from "http-status-codes";
import { jwtHelpers } from "../../helper/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "You are unauthorized!");
      }
      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.access_token_secret as Secret
      );
      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "You are unauthorized!");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
export default auth;
