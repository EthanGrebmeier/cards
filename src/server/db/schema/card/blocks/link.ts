import {
  bigint,
  index,
  int,
  smallint,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { relations, sql } from "drizzle-orm";
import { cards } from "..";
import { mysqlTable } from "~/server/db/tableCreator";

export const linkThemes = mysqlTable("linkThemes", {
  id: smallint("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
});

export const links = mysqlTable(
  "links",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    createdById: varchar("createdById", { length: 255 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),

    href: varchar("href", { length: 255 }).notNull(),
    text: varchar("text", { length: 255 }).notNull(),
    cardId: int("card_id").notNull(),
  },
  (example) => ({
    createdByIdIdx: index("createdById_idx").on(example.createdById),
  }),
);

export const linkRelations = relations(links, ({ one }) => ({
  // linkThemes: one(linkThemes),
  cards: one(cards, { fields: [links.cardId], references: [cards.id] }),
}));

export const themeRelation = relations(linkThemes, ({ many }) => ({
  links: many(links),
}));
