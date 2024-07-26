import prisma from "../../../shared/prisma";

const createProjectIntoDB = async (payload: any) => {
  console.log("create project");
  const project = await prisma.project.create({
    data: payload,
  });
  return project;
};

const getAllProjectFromDB = async () => {
  const allProject = await prisma.project.findMany();
  return allProject;
};

const updateProjectIntoDB = async (payload: any, id: string) => {
  const projectData = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const updateProject = await prisma.project.update({
    where: {
      id: projectData.id,
    },
    data: payload,
  });

  return updateProject;
};

const deleteProjectFromDB = async (id: string) => {
  const project = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const deletedProject = await prisma.project.delete({
    where: {
      id: project.id,
    },
  });
  return deletedProject;
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
