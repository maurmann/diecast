/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { model } from '@prisma/client';
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

}