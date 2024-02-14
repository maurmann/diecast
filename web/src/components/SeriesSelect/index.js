import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'

const SeriesSelect = (props) => {

    const [data, setData] = useState([]);

    const brandId = props.brandId && props.brandId >= 0 ? props.brandId : -1;


    useEffect(() => {
        fetch('http://localhost:3001/series/' + brandId,
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
        <Select placeholder='Select a series' isDisabled={data.length == 0}>
            {data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default SeriesSelect