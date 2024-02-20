import { parseIntOrNull } from "../utilities/parse.utility";

export const modelMapper = (name, brandId, seriesId, manufacturerId, year, categoryId, detail,code) => {

    const model =
    {
        name: name,
        brandId: parseInt(brandId),
        seriesId: parseIntOrNull(seriesId),
        manufacturerId: parseIntOrNull(manufacturerId),
        year: parseIntOrNull(year),
        categoryId: parseIntOrNull(categoryId),
        detail: detail,
        code: code,
    };

    return model;
}