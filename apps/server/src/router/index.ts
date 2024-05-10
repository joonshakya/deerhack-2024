import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { chatRouter } from "./chat";
import { notificationRouter } from "./notification";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  user: userRouter,
  chat: chatRouter,

  notification: notificationRouter,

  healthCheck: publicProcedure.query(() => {
    return "Hello from tRPC";
  }),
});

export type AppRouter = typeof appRouter;
