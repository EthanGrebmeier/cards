import { z } from "zod";
import { blockSchemas } from "./blocks";

export const sideSchema = z.object({
  blocks: z.array(blockSchemas),
});

export const cardSchema = z.object({
  front: z.object({
    template: z.literal("basic"),
  }),
  back: sideSchema,
});
