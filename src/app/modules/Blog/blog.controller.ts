import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { SkillService } from "../Skill/skill.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { BlogService } from "./blog.service";

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.createBlogIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Blog added successfully!",
    data: result,
  });
});
const getBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog data fetched successfully!",
    data: result,
  });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.updateBlogIntoDB(req.body, id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog updated successfully!",
    data: result,
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlogFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog deleted successfully!",
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
