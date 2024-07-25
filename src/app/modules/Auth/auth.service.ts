import { StatusCodes } from "http-status-codes";
import prisma from "../../../shared/prisma";
import ApiError from "../../error/apiError";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { UserRole } from "@prisma/client";
import { jwtHelpers } from "../../../helper/jwtHelper";
import config from "../../../config";

const loginUserIntoDB = async (payload: {
  password: string;
  email: string;
}) => {
  const admin = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!admin) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Admin does not exists!");
  }
  //check password
  const isPasswordCorrect = await bcrypt.compare(
    payload.password,
    admin.password
  );
  if (!isPasswordCorrect) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Password not correct!");
  }

  const jwtPayload = {
    adminId: admin.id,
    email: admin.email,
    role: admin.role,
  };

  const accessToken = jwtHelpers.generateToken(
    jwtPayload,
    config.jwt.access_token_secret as Secret,
    config.jwt.access_token_expires_in as string
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  loginUserIntoDB,
};
