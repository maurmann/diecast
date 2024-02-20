import { z } from 'zod';

export const modelCreateSchema = z
  .object({
    name: z.string(),
    brandId: z.number(),
    seriesId: z.nullable(z.number()),
    manufacturerId: z.nullable(z.number()),
    year: z.nullable(z.number()),
    categoryId: z.nullable(z.number()),
    detail: z.nullable(z.string()),
    code: z.nullable(z.string()),
  })
  .required();

export type ModelCreateDto = z.infer<typeof modelCreateSchema>;
