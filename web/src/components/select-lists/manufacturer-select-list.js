import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'
import { readDataKeyFromSelectedItem } from "../../utilities/select-list-utility";

const ManufacturerSelectList = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/manufacturers", { method: "GET" })
            .then((response) => response.json())
            .then((data) => { setData(data); })
    }, []);

    return (
        <Select placeholder='Select a manufacturer'
            onChange={(event) => {
                const id = readDataKeyFromSelectedItem(event);
                props.manufacturerChanged(id);
            }} >
            {data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default ManufacturerSelectList