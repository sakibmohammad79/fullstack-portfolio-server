import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

const createAdmin = async (payload: any) => {
  const admin = payload.admin;
  //password hashed
  const hashedPassword = await bcrypt.hash(payload.password, 12);
  //create admin
  const adminData = {
    password: hashedPassword,
    name: admin.name,
    email: admin.email,
    role: UserRole.admin,
    designation: admin.designation,
    resumeUrl: admin.resumeUrl,
  };
  await prisma.user.create({
    data: adminData,
  });

  return adminData;
};

const getAdminFromDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const updateAdminIntoDB = async (payload: any, id: string) => {
  const admin = await prisma.user.findFirstOrThrow({
    where: {
      id,
    },
  });

  const updateAdmin = await prisma.user.update({
    where: {
      email: admin.email,
    },
    data: payload,
  });
  return updateAdmin;
};

export const userService = {
  createAdmin,
  getAdminFromDB,
  updateAdminIntoDB,
};
