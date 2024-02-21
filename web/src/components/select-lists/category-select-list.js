import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'
import { readDataKeyFromSelectedItem } from "../../utilities/select-list-utility";

const CategorySelectList = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/categories", { method: "GET" })
            .then((response) => response.json())
            .then((data) => { setData(data); })
    }, []);

    return (
        <Select placeholder='Select a category'
            onChange={(event) => {
                const id = readDataKeyFromSelectedItem(event);
                props.categoryChanged(id);
            }}>
            {data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default CategorySelectList