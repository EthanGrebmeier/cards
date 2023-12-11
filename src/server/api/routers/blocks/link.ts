import { eq } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { cards } from "~/server/db/schema/card";
import { links } from "~/server/db/schema/card/blocks/link";

export const linkRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        cardId: z.number(),
        href: z.string().min(3).max(256),
        text: z.string().min(1).max(256),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(links).values({ ...input, createdById: "1" });
    }),
  update: publicProcedure
    .input(
      z.object({
        blockId: z.number(),
        href: z.string().min(3).max(256),
        text: z.string().min(1).max(256),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(links)
        .set({ href: input.href, text: input.text })
        .where(eq(links.id, input.blockId));
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(links).where(eq(links.id, input.id));
    }),
});
