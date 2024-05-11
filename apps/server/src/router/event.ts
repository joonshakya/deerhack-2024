import { z } from "zod";

import { Category, EventOrganizerRole } from "../../../prisma-generated";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.event.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        category: z.nativeEnum(Category),
        image: z.string(),
        date: z.date(),
        time: z.string(),
        venue: z.string(),
        paymentScreenshotNeeded: z.boolean(),
        registrationRequirements: z.array(z.string()),
        registrationPrice: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.event.create({
        data: {
          ...input,
          lead: {
            connect: {
              id: ctx.user!.id,
            },
          },
          organizers: {
            create: {
              userId: ctx.user!.id,
              role: EventOrganizerRole.LOGISTICS,
            },
          },
        },
      });
    }),
});
