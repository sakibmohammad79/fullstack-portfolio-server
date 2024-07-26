import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProjectService } from "./project.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

const createProject: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectService.createProjectIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Project added successfully!",
    data: result,
  });
});
const getProject: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjectFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All project fetched successfully!",
    data: result,
  });
});
const updateProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.updateProjectIntoDB(req.body, id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project updated successfully!",
    data: result,
  });
});
const deleteProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.deleteProjectFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project deleted successfully!",
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
