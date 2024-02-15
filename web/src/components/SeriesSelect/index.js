import { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'

const SeriesSelect = (props) => {

    const [data, setData] = useState([]);

    const brandId = props.brandId && props.brandId >= 0 ? props.brandId : -1;

    function onChange(event) {
        const index = event.target.options.selectedIndex;
        const changedId = event.target.options[index].getAttribute('data-key');
        props.seriesChanged(changedId);
    }


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
        <Select placeholder='Select a series'
            isDisabled={data.length == 0}
            onChange={onChange}>
            {data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default SeriesSelect