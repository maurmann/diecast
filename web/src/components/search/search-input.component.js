import { useEffect, useState } from "react";
import { InputGroup, Input, InputRightElement, CircularProgress, InputLeftElement, Show } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounce } from "@uidotdev/usehooks";

const SearchInput = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        props.executeSearch(searchTerm);
    }, [debouncedSearchTerm])

    return (
        <InputGroup>
            {debouncedSearchTerm != searchTerm &&
                (
                    <InputLeftElement pointerEvents='none'>
                        <CircularProgress isIndeterminate size="20px" color='green.300' />
                    </InputLeftElement>
                )
            }
            <InputRightElement pointerEvents='none'>
                <SearchIcon />
            </InputRightElement>
            <Input
                type='search'
                placeholder='Search models by code or name'
                bg={'gray.100'}
                onChange={handleChange}>
            </Input>
        </InputGroup>
    )
}

export default SearchInput

