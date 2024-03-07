import { useEffect, useState } from "react";
import GenericSelect from "./generic-select.component";
import { brandGetAllEndpoint } from "../../constants/endpoints";

const BrandSelect = (props) => {

    console.log('brand ' + props.value);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(brandGetAllEndpoint, { method: "GET" })
            .then((response) => response.json())
            .then((data) => { setData(data); })
    }, []);

    return (
        <GenericSelect
            placeholder={"Select a brand"}
            data={data}
            onParentChange={(value) => props.onParentChange(value)}
            value={props.value}>
        </GenericSelect>
    )
}

export default BrandSelect