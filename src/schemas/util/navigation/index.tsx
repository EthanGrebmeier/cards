import { z } from "zod";

export const modeSchema = z.union([z.literal("edit"), z.literal("view")]);
