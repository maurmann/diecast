export class ModelGetDto {
  constructor(
    readonly modelId: number,
    readonly model: string,
    readonly modelSeries: string,
    readonly vehicle: string,
    readonly vehicleManufacturer: string,
    readonly vehicleOrigin: string,
  ) {}
}
