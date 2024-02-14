import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'

const BrandSelect = (props) => {

    const [data, setData] = useState([]);

    function onChangeBrand(event) {
        const index = event.target.options.selectedIndex;
        const changedId = event.target.options[index].getAttribute('data-key');
        props.brandChanged(changedId);
    }

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
        <Select placeholder='Select a brand' onChange={onChangeBrand}>
            {data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default BrandSelect