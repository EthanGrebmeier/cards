import { z } from "zod";

const configSchema = z.object({
  width: z.number(),
  height: z.number(),
});

const blockSchema = z.object({
  id: z.number(),
  name: z.unknown(),
  theme: z.string(),
  config: configSchema,
  data: z.unknown(),
});

export const linkSchema = blockSchema.extend({
  name: z.literal("link"),
  data: z.object({
    href: z.string(),
    text: z.string(),
  }),
});

export const imageSchema = blockSchema.extend({
  name: z.literal("image"),
  data: z.object({}),
});

export const blockSchemas = z.union([linkSchema, imageSchema]);
