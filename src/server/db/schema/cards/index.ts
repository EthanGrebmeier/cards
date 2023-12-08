import { bigint, index, timestamp, varchar } from "drizzle-orm/mysql-core";

import { relations, sql } from "drizzle-orm";
import * as blocks from "./blocks/link";
import { mysqlTable } from "../../tableCreator";

export const cards = mysqlTable(
  "card",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdById: varchar("createdById", { length: 255 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    createdByIdIdx: index("createdById_idx").on(example.createdById),
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const cardsRelations = relations(cards, ({ many }) => ({
  links: many(blocks.links),
}));

export { blocks };
