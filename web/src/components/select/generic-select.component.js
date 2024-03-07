import { Select } from '@chakra-ui/react';
import { useState } from "react";

const GenericSelect = (props) => {
   
   

    console.log('generic ' + props.value);

    const readSelectedItem = (event) => {
        const index = event.target.options.selectedIndex;
        const id = event.target.options[index].getAttribute('value');
        return id;
    }

    return (
        <Select
            placeholder={props.placeholder}
            isDisabled={props.data.length == 0}
            onChange={(event) => props.onParentChange(readSelectedItem(event))}
            value={props.value}>
            {props.data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id} value={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default GenericSelect