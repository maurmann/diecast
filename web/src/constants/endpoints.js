export const brandGetAllEndpoint = "http://localhost:3001/brands";
export const categoryGetAllEndpoint = "http://localhost:3001/categories";
export const manufacturerGetAllEndpoint = "http://localhost:3001/manufacturers";
export const seriesGetByBrandIdEndpoint = (brandId) => "http://localhost:3001/series/" + brandId ;


export const modelEndpoints = {
    "getAll":"",
    "getById":"http://localhost:3001/models/id/:id"
}

