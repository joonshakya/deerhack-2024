import { z } from "zod";

import { Category, EventOrganizerRole } from "../../../prisma-generated";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const responseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        linkedIn: z.string(),
        fullName: z.string(),
        email: z.string(),
        phone: z.string(),
        message: z.string(),
        eventId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.response.create({
        data: {
          linkedIn: input.linkedIn,
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          extraInfo: {},
          event: {
            connect: {
              id: input.eventId,
            },
          },
        },
      });
    }),
  get: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.response.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getLinkedIn: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      await ctx.prisma.user.update({
        where: {
          id: ctx.user.id,
        },
        data: {
          networking: {
            increment: 1,
          },
        },
      });
      return (
        await ctx.prisma.response.findUnique({
          where: {
            id: input.id,
          },
        })
      )?.linkedIn;
    }),
});
