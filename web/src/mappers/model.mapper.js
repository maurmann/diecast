import { parseIntOrNull } from "../utilities/parse.utility";

export const modelMapper = (name, brandId, seriesId, vehicleId, year) => {

    const model =
    {
        name: name,
        brandId: parseInt(brandId),
        seriesId: parseIntOrNull(seriesId),
        vehicleId: parseIntOrNull(vehicleId),
        year: parseIntOrNull(year)
    };

    return model;
}