/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { modelBrand } from '@prisma/client';
import { PostBrandDto } from "src/model/getModel.dto";
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

    async create(newName: PostBrandDto) {
        await this.prisma
            .modelBrand
            .create({
                data: {
                    name: newName.name
                }
            })
    };
}