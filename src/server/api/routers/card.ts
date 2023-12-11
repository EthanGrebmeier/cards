import { eq } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { cards } from "~/server/db/schema/card";

export const cardRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(cards).values({
        name: input.name,
        createdById: "1",
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.cards.findMany({
      orderBy: (cards, { desc }) => [desc(cards.createdAt)],
    });
  }),

  getCard: publicProcedure
    .input(z.object({ id: z.number().min(1), includeBlocks: z.boolean() }))
    .query(async ({ ctx, input }) => {
      const card = await ctx.db.query.cards.findFirst({
        where: (cards, { eq }) => eq(cards.id, input.id),
        with: {
          links: true,
        },
      });

      if (!card) {
        return undefined;
      }

      return {
        id: card.id,
        name: card.name,
        createdById: card.createdById,
        createdAt: card.createdAt,
        blocks: [
          ...card.links.map((link) => ({ ...link, name: "link" as const })),
        ],
      };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(cards).where(eq(cards.id, input.id));
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
