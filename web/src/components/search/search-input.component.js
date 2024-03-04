import { useEffect, useState } from "react";
import { InputGroup, Input, InputRightElement, CircularProgress, InputLeftElement, Show } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounce } from "@uidotdev/usehooks";

const SearchInput = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const handleChange = (e) => {
        console.log('handleChange ' + e.target.value);
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        props.executeSearch(searchTerm);
    }, [debouncedSearchTerm])

    return (
        <InputGroup>
            {debouncedSearchTerm &&
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
                placeholder='Search models'
                bg={'gray.100'}
                onChange={handleChange}>
            </Input>
        </InputGroup>
    )
}

export default SearchInput

