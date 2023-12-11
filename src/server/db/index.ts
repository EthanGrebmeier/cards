import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "~/env.mjs";
import * as schema from "./schema";
import * as cardSchema from "./schema/card/index";
import * as linkSchema from "./schema/card/blocks/link";

export const db = drizzle(
  new Client({
    url: env.DATABASE_HOST,
  }).connection(),
  { schema: { schema, ...cardSchema, ...linkSchema } },
);
