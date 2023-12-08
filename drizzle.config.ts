import { type Config } from "drizzle-kit";

import { env } from "~/env.mjs";

export default {
  schema: "./src/server/db/schema/**",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_HOST,
  },
  tablesFilter: ["giggi_*"],
} satisfies Config;
