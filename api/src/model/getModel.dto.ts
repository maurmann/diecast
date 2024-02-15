/* eslint-disable prettier/prettier */
export class GetModelDto {
    constructor(
        readonly modelId: number,
        readonly model: string,
        readonly modelSeries: string,
        readonly vehicle: string,
        readonly vehicleManufacturer: string,
        readonly vehicleOrigin: string,
    ) { }
}


export class PostBrandDto {
    constructor(
        readonly name: string
    ) { }
}

/*
export class PostModelDto {
    constructor(
        readonly name: string,
        readonly brandId: number,
        readonly seriesId?: number,
        readonly vehicleId?: number,
        readonly year?: number,
    ) { }
}
*/