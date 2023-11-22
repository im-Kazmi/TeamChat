import * as z from "zod";

export const serverSchema = z.object({
  name: z.string().min(1).max(30),
  imageUrl: z.string().min(1),
});
