import { useState } from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const searchFor = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setSearchValue(event.target.value);
            props.executeSearch(searchValue);
        }
    }

    return (
        <InputGroup>
            <InputRightElement pointerEvents='none'>
                <SearchIcon />
            </InputRightElement>
            <Input
                type='search'
                placeholder='Search models'
                bg={'gray.100'}
                onChange={(event) => searchFor(event)}>
            </Input>
        </InputGroup>
    )
}

export default SearchInput

