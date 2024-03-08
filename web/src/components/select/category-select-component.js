import { useEffect, useState } from "react";
import { categoryGetAllEndpoint } from "../../constants/endpoints";
import GenericSelect from "./generic-select.component";

const CategorySelect = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(categoryGetAllEndpoint, { method: "GET" })
            .then((response) => response.json())
            .then((data) => { setData(data); })
    }, []);

    return (
        <GenericSelect
            placeholder={"Select a category"}
            data={data}
            onParentChange={(value) => props.onParentChange(value)}
            value={props.value}>
        </GenericSelect>
    )
}

export default CategorySelect