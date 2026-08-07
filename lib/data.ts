import { prisma } from "./prisma";

export async function getSite() {
  return prisma.cliente.findFirst({
    include: {
      site: {
        include: {
          areas: true,
          faqs: true,
          depoimentos: true,
        },
      },
    },
  });
}