import { useEffect, useState } from "react";
import { seriesGetByBrandIdEndpoint } from "../../constants/endpoints";
import GenericSelect from "./generic-select.component";

const SeriesSelect = (props) => {

    const [data, setData] = useState([]);

    const brandId = props.brandId && props.brandId >= 0 ? props.brandId : -1;

    useEffect(() => {
        fetch(seriesGetByBrandIdEndpoint(brandId),
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setData(data);
            })
    }, [brandId]);

    return (brandId &&
        <GenericSelect
            placeholder={"Select a series"}
            data={data}
            onParentChange={(value) => props.onParentChange(value)}
            value={props.value}>
        </GenericSelect>
    )
}

export default SeriesSelect