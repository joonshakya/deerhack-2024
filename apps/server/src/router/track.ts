import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const trackRouter = createTRPCRouter({
  getFromResponseId: protectedProcedure
    .input(
      z.object({
        categoryId: z.string(),
        responseId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const trackingDetail = await ctx.prisma.trackingDetail.findFirst({
        where: {
          trackId: input.categoryId,
          responseId: input.responseId,
        },
        include: {
          response: true,
        },
      });
      if (!trackingDetail) {
        return ctx.prisma.trackingDetail.create({
          data: {
            track: {
              connect: {
                id: input.categoryId,
              },
            },
            response: {
              connect: {
                id: input.responseId,
              },
            },
          },
          include: {
            response: true,
          },
        });
      }
      return trackingDetail;
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
  invalidate: protectedProcedure
    .input(
      z.object({
        categoryId: z.string(),
        responseId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.trackingDetail.update({
        where: {
          trackId_responseId: {
            trackId: input.categoryId,
            responseId: input.responseId,
          },
        },
        data: {
          scannedAt: new Date(),
        },
      });
    }),
  create: protectedProcedure
    .input(
      z.object({
        eventId: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.track.create({
        data: {
          ...input,
          eventId: undefined,
          event: {
            connect: {
              id: input.eventId,
            },
          },
        },
      });
    }),
  getCategory: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.track.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
