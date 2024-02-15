/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { model } from '@prisma/client';
import { ModelCreateDto } from "src/pipes/schemas/model.create.schema";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ModelService {
    constructor(private prisma: PrismaService) { }

    async getAll()
        : Promise<model[]> {
        return this.prisma
            .model
            .findMany({
                include: {
                    modelBrand: true,
                    modelSeries: true,
                    vehicle: {
                        include: {
                            vehicleManufacturer: true
                        }
                    }

                }
            });
    }

    async create(newModel: ModelCreateDto) {
        await this.prisma
            .model
            .create({
                data: {
                    name: newModel.name,
                    brand_id: newModel.brandId,
                    series_id: newModel.seriesId,
                    vehicle_id: newModel.vehicleId,
                    year: newModel.year
                }
            });
    }
}
