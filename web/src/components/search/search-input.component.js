import { useEffect, useState } from "react";
import { InputGroup, Input, InputRightElement, CircularProgress, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounce } from "@uidotdev/usehooks";

const SearchInput = (props) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        props.search(searchTerm);
    }, [debouncedSearchTerm])

    const getCircularProgressColor = () => {
        return props.isLoading ? "green.300" : "white.800";
    }

    return (
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <CircularProgress isIndeterminate size="20px" color={getCircularProgressColor} />
            </InputLeftElement>
            <Input
                type='search'
                placeholder='Search models by code or name'
                bg={'gray.100'}
                onChange={handleChange}>
            </Input>
            <InputRightElement>
                <SearchIcon></SearchIcon>
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchInput

