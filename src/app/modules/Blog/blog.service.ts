import prisma from "../../../shared/prisma";

const createBlogIntoDB = async (payload: any) => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id: payload.userId,
    },
  });

  const createBlog = await prisma.blog.create({
    data: payload,
  });
  return createBlog;
};

const getAllBlogFromDB = async () => {
  const allBlog = await prisma.blog.findMany();
  return allBlog;
};

const getSingleBlogFromDB = async (id: string) => {
  const singleBlog = await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return singleBlog;
};

const updateBlogIntoDB = async (payload: any, id: string) => {
  const blog = await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const updateBlog = await prisma.blog.update({
    where: {
      id: blog.id,
    },
    data: payload,
  });
  return updateBlog;
};

const deleteBlogFromDB = async (id: string) => {
  const blogData = await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const deleteBlog = await prisma.blog.delete({
    where: {
      id: blogData.id,
    },
  });
  return deleteBlog;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getSingleBlogFromDB,
};
