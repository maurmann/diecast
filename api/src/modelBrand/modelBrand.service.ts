/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { modelBrand } from '@prisma/client';
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ModelBrandService {

    constructor(private prisma: PrismaService) { }

    async getAll()
        : Promise<modelBrand[]> {
        return this.prisma
            .modelBrand
            .findMany();
    }

    async getById(id: number)
        : Promise<modelBrand | null> {
        return this.prisma
            .modelBrand
            .findUnique({
                where: { id }
            })
    }
}
