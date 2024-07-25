import prisma from "../../../shared/prisma";

const createSkillIntoDB = async (payload: any) => {
  const createSkill = await prisma.skill.create({
    data: payload,
  });
  return createSkill;
};

const getSkillFromDB = async () => {
  const allSkill = await prisma.skill.findMany();
  return allSkill;
};

const updateSkillIntoDB = async (payload: any, id: string) => {
  const skill = await prisma.skill.findFirstOrThrow({
    where: {
      id,
    },
  });
  const updateSkill = await prisma.skill.update({
    where: {
      id: skill.id,
    },
    data: payload,
  });
  return updateSkill;
};

const deleteSkillFromDB = async (id: string) => {
  const skillData = await prisma.skill.findFirstOrThrow({
    where: {
      id,
    },
  });

  const deleteSkill = await prisma.skill.delete({
    where: {
      id: skillData.id,
    },
  });
  return deleteSkill;
};

export const SkillService = {
  createSkillIntoDB,
  updateSkillIntoDB,
  getSkillFromDB,
  deleteSkillFromDB,
};
