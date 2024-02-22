import { Select } from '@chakra-ui/react';

const GenericSelect = (props) => {

    const readSelectedItem = (event) => {
        const index = event.target.options.selectedIndex;
        const id = event.target.options[index].getAttribute('data-key');
        return id;
    }

    return (
        <Select
            placeholder={props.placeholder}
            isDisabled={props.data.length == 0}
            onChange={(event) => props.onParentChange(readSelectedItem(event))}>
            {props.data.map((d) => {
                return (
                    <option key={d.id} data-key={d.id}>{d.name}</option>
                )
            })}
        </Select>
    )
}

export default GenericSelect