import { useEffect, useState } from "react";
import { manufacturerGetAllEndpoint } from "../../constants/endpoints";
import GenericSelect from "./generic-select.component";

const ManufacturerSelectList = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(manufacturerGetAllEndpoint, { method: "GET" })
            .then((response) => response.json())
            .then((data) => { setData(data); })
    }, []);

    return (
        <GenericSelect
            placeholder={"Select a manufacturer"}
            data={data}
            onParentChange={(value) => props.onParentChange(value)}
            value={props.value}>
        </GenericSelect>
    )
}

export default ManufacturerSelectList