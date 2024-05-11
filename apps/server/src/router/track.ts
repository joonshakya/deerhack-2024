import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const trackRouter = createTRPCRouter({
  getFromResponseId: protectedProcedure
    .input(
      z.object({
        responseId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.trackingDetail.findFirst({
        where: {
          responseId: input.responseId,
        },
        include: {
          response: true,
        },
      });
    }),
  validate: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.trackingDetail.update({
        where: {
          id: input.id,
        },
        data: {
          scannedAt: null,
        },
      });
    }),
});
