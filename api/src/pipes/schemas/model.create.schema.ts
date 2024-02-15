/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const modelCreateSchema = z
    .object({
        name: z.string(),
        brandId: z.number(),
        seriesId: z.nullable(z.number()),
        vehicleId: z.nullable(z.number()),
        year: z.nullable(z.number()),
    })
    .required();

export type ModelCreateDto = z.infer<typeof modelCreateSchema>;
