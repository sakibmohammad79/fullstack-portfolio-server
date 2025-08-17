import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ContactService } from './contact.service';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from "http-status-codes";

const createContact = catchAsync(async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  const contact = await ContactService.createContactIntoDB({
    name,
    email,
    subject,
    message,
  });

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Contact message submitted successfully',
    data: contact,
  });
});

const getContacts = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, search } = req.query;

  const result = await ContactService.getAllContactsFromDB({
    page: page ? parseInt(page as string) : 1,
    limit: limit ? parseInt(limit as string) : 10,
    search: search as string,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Contacts retrieved successfully',
    // meta: result.pagination,
    data: result.contacts,
  });
});

const getContactById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const contact = await ContactService.getSingleContactFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Contact retrieved successfully',
    data: contact,
  });
});

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const contact = await ContactService.deleteContactFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Contact deleted successfully',
    data: contact,
  });
});

const getContactStats = catchAsync(async (req: Request, res: Response) => {
  const stats = await ContactService.getContactStatsFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Contact statistics retrieved successfully',
    data: stats,
  });
});

export const ContactController = {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
  getContactStats,
};