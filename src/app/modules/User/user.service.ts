import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const createAdmin = async (payload: any) => {
  const admin = payload.admin;
  //password hashed
  const hashedPassword = await bcrypt.hash(payload.password, 12);

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

  return {
    adminData,
  };
};

export const userService = {
  createAdmin,
};
