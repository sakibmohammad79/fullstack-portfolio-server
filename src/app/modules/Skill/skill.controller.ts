import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { SkillService } from "./skill.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../shared/sendResponse";

const createSkill: RequestHandler = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Skill added successfully!",
    data: result,
  });
});

const getSkill: RequestHandler = catchAsync(async (req, res) => {
  const result = await SkillService.getSkillFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skill data fetched successfully!",
    data: result,
  });
});

const updateSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.updateSkillIntoDB(req.body, id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skill updated successfully!",
    data: result,
  });
});

const deleteSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.deleteSkillFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skill deleted successfully!",
    data: result,
  });
});

export const SkillController = {
  createSkill,
  updateSkill,
  getSkill,
  deleteSkill,
};
