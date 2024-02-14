/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { modelSeries } from '@prisma/client';
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ModelSeriesService {

    constructor(private prisma: PrismaService) { }

    async getAll(modelBrandId: number)
        : Promise<modelSeries[]> {
        return this.prisma
            .modelSeries
            .findMany({
                where: {
                    model_brand_id: modelBrandId
                }
            });
    }

    /*
    async getById(id: number)
        : Promise<modelBrand | null> {
        return this.prisma
            .modelBrand
            .findUnique({
                where: { id }
            })
    }
    */
}
