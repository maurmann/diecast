/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { model_brand } from '@prisma/client';
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ModelBrandService {

    constructor(private prisma: PrismaService) { }

    async getAll()
        : Promise<model_brand[]> {
        return this.prisma
            .model_brand
            .findMany();
    }

    async getById(id: string)
        : Promise<model_brand | null> {
        return this.prisma
            .model_brand
            .findUnique({
                where: { id }
            })
    }
}
