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