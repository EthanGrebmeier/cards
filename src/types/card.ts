import type { db } from "~/server/db";
import type { api } from "~/trpc/server";

type NonNullable<T> = Exclude<T, null | undefined>;

type ElementType<T extends Iterable<unknown>> = T extends Iterable<infer E>
  ? E
  : never;

export type Card = NonNullable<
  Awaited<ReturnType<typeof api.card.getCard.query>>
>;

export type Link = NonNullable<
  Awaited<ReturnType<typeof db.query.links.findFirst>> & {
    name: "link";
  }
>;

export type Block = ElementType<Card["blocks"]>;
