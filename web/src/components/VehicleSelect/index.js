import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'

const VehicleSelect = (props) => {

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
        <Select placeholder='Select a manufacturer'>
            <option value='1'>Ford</option>
            <option value='2'>Chevrolet</option>
        </Select>
    )
}

export default VehicleSelect