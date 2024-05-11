import { createTRPCRouter } from "../trpc";
import { eventRouter } from "./event";
import { notificationRotuer } from "./notification";
import { responseRouter } from "./response";
import { trackRouter } from "./track";
import { userRotuer } from "./user";

export const appRouter = createTRPCRouter({
  user: userRotuer,
  notification: notificationRotuer,
  event: eventRouter,
  response: responseRouter,
  track: trackRouter,
});

export type AppRouter = typeof appRouter;
