import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'

const ManufacturerSelectList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/manufacturers",{ method: "GET"})
            .then((response) => response.json())
            .then((data) => {setData(data); })
    },[]);

    return (
        <Select placeholder='Select a manufacturer'>
            {data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default ManufacturerSelectList