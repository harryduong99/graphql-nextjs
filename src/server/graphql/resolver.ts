import prisma from "../db/prisma";

export const resolvers = {
  Query: {
    links: () => {
      return prisma.link.findMany();
    },
  },
};
