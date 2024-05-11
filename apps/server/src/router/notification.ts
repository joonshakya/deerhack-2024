import { createTRPCRouter, protectedProcedure } from "../trpc";

export const notificationRotuer = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.notification.findMany({
      where: {
        userId: ctx.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        body: true,
        dataType: true,
        dataId: true,
        read: true,
        type: true,
        createdAt: true,
      },
    });
  }),
});
