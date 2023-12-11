import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { cardRouter } from "./routers/card";
import { linkRouter } from "./routers/blocks/link";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  card: cardRouter,
  blocks: createTRPCRouter({
    links: linkRouter,
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
