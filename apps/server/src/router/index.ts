import { createTRPCRouter } from "../trpc";
import { eventRouter } from "./event";
import { notificationRotuer } from "./notification";
import { userRotuer } from "./user";

export const appRouter = createTRPCRouter({
  user: userRotuer,
  notification: notificationRotuer,
  event: eventRouter,
});

export type AppRouter = typeof appRouter;
