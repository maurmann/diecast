import { useDisclosure, Card, CardBody, Table, Th, Tr, Thead, Tbody, Td, IconButton, Stack, Button, Box } from "@chakra-ui/react";
import { AddIcon, SearchIcon, EditIcon, DeleteIcon, ArrowUpIcon } from '@chakra-ui/icons';
import PageTitle from "../../components/PageTitle";
import { useEffect, useState } from "react";
import ModelsFilter from "./ModelsFilter";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination/pagination";
import SearchInput from "../../components/search/search-input.component";

const ModelsList = () => {

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [rows, setRows] = useState(0);
    const [searchExpression, setSearchExpression] = useState("");

    const newModel = () => {
        navigate('/models/form');
    }

    const editModel = (id, event) => {
        navigate(`/models/form?id=${id}`);
    }

    const deleteModel = (id, event) => {
    }

    function countUrl() {
        let url = "http://localhost:3001/models/count";
        url += addSearch("?");
        return url;
    }

    function listUrl() {
        let url = "http://localhost:3001/models";
        url += addPage("?");
        url += addSearch("&");
        return url;
    }

    function addPage(delimiter) {
        return delimiter + new URLSearchParams({ pageNumber })
    }

    function addSearch(delimiter) {
        return delimiter + new URLSearchParams({ "search": searchExpression });
    }

    function changePageNumber(pageNumber) {
        setPageNumber(pageNumber);
    }

    useEffect(() => {
        fetch(countUrl(),
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setRows(data);
            })
    }, [searchExpression]);

    useEffect(() => {
        fetch(listUrl(),
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setData(data);
            })
    }, [pageNumber, searchExpression]);

    return (
        <div>
            <ModelsFilter isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            </ModelsFilter>

            <PageTitle Title="Models" SubTitle="List with all models"></PageTitle>

            <Box marginBottom={'8px'}>
                <Stack direction={'row'} spacing={2} verticalAlign={'middle'}>
                    <Button colorScheme='green' leftIcon={<AddIcon />} size='sm' onClick={newModel} >New Model</Button>
                    <Button colorScheme='blackAlpha' leftIcon={<SearchIcon />} size='sm' onClick={onOpen}>Apply Filters</Button>
                    <SearchInput
                        executeSearch={(value) => setSearchExpression(value)}>
                    </SearchInput>
                </Stack>
            </Box>

            <Card>
                <CardBody>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Brand<ArrowUpIcon /> </Th>
                                <Th>Series</Th>
                                <Th>Model</Th>
                                <Th>Manufacturer</Th>
                                <Th>Details</Th>
                                <Th>Year</Th>
                                <Th>Origin</Th>
                                <Th>Category</Th>
                                <Th>Code</Th>
                                <Th>Edit</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((d) => {
                                return (
                                    <Tr key={d.id}>
                                        <Td>{d.id}</Td>
                                        <Td>{d.brand.name}</Td>
                                        <Td>{d.series?.name}</Td>
                                        <Td>{d.name}</Td>
                                        <Td>{d.manufacturer?.name}</Td>
                                        <Td>{d.detail}</Td>
                                        <Td>{d.year}</Td>
                                        <Td>{d.manufacturer?.country?.name}</Td>
                                        <Td>{d.category?.name}</Td>
                                        <Td>{d.code}</Td>
                                        <Td>
                                            <IconButton
                                                isRound={false}
                                                colorScheme="blue"
                                                size="sm"
                                                variant='outline'
                                                icon={<EditIcon />}
                                                onClick={(event) => editModel(d.id, event)} />
                                        </Td>
                                        <Td>
                                            <IconButton
                                                isRound={false}
                                                colorScheme="blue"
                                                size="sm"
                                                variant='outline'
                                                icon={<DeleteIcon />}
                                                onClick={(event) => deleteModel(d.id, event)} /></Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>

                </CardBody>
            </Card>
            <Pagination
                pageNumber={pageNumber}
                rows={rows}
                changePageNumber={value => setPageNumber(value)} />
        </div >
    )
};

export default ModelsList;