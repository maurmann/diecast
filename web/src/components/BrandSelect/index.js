import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'

const BrandSelect = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/models/brands",
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setData(data);
            })
    }, []);


    return (
        <Select placeholder='Select a brand'>
            {data.map((d) => {
                return (
                    <option value={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default BrandSelect