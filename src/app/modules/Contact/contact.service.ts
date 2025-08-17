
import prisma from '../../../shared/prisma';

interface CreateContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface GetContactsOptions {
  page?: number;
  limit?: number;
  search?: string;
}

const createContactIntoDB = async (payload: CreateContactData) => {
  const contact = await prisma.contact.create({
    data: {
      name: payload.name.trim(),
      email: payload.email.toLowerCase().trim(),
      subject: payload.subject.trim(),
      message: payload.message.trim(),
    },
  });
  return contact;
};

const getAllContactsFromDB = async (options: GetContactsOptions = {}) => {
  const { page = 1, limit = 10, search } = options;
  const skip = (page - 1) * limit;

  // Build where clause for search
  const whereClause = search
    ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' as const } },
          { email: { contains: search, mode: 'insensitive' as const } },
          { subject: { contains: search, mode: 'insensitive' as const } },
          { message: { contains: search, mode: 'insensitive' as const } },
        ],
      }
    : {};

  const [contacts, total] = await Promise.all([
    prisma.contact.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.contact.count({ where: whereClause }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    contacts,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
};

const getSingleContactFromDB = async (id: string) => {
  const contact = await prisma.contact.findUniqueOrThrow({
    where: { id },
  });
  return contact;
};

const deleteContactFromDB = async (id: string) => {
  const contact = await prisma.contact.findUniqueOrThrow({
    where: { id },
  });

  const deletedContact = await prisma.contact.delete({
    where: { id: contact.id },
  });
  return deletedContact;
};

const getContactStatsFromDB = async () => {
  const [total, thisMonth, thisWeek] = await Promise.all([
    prisma.contact.count(),
    prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    }),
    prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
    }),
  ]);

  return { total, thisMonth, thisWeek };
};

export const ContactService = {
  createContactIntoDB,
  getAllContactsFromDB,
  getSingleContactFromDB,
  deleteContactFromDB,
  getContactStatsFromDB,
};
