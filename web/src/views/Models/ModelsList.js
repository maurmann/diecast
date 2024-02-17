import { useDisclosure, Input,InputGroup,InputRightElement,IsOpen, onOpen, onClose, Card, CardBody, Table, Th, Tr, Thead, Tbody, Td, IconButton, Stack, Button, Box, CardFooter, Icon } from "@chakra-ui/react";
import { AddIcon, SearchIcon, EditIcon, DeleteIcon, ArrowUpIcon } from '@chakra-ui/icons';
import PageTitle from "../../components/PageTitle";
import { useEffect, useState } from "react";
import ModelsFilter from "./ModelsFilter";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination/pagination";

const ModelsList = () => {

    const navigate = useNavigate();

    const newModel = () => {
        navigate('/models/form');
    }

    const editModel = (id, event) => {
        navigate(`/models/form?id=${id}`);
    }

    const deleteModel = (id, event) => {
        console.log('delete');
        console.log(event.type);
        console.log(id);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/models",
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
        <div>
            <ModelsFilter isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            </ModelsFilter>

            <PageTitle Title="Models" SubTitle="List with all models"></PageTitle>

            <Box marginBottom={'8px'}>
                <Stack direction={'row'} spacing={2} verticalAlign={'middle'}>
                    <Button colorScheme='green' leftIcon={<AddIcon />} size='sm' onClick={newModel} >New Model</Button>
                    <Button colorScheme='blackAlpha' leftIcon={<SearchIcon />} size='sm' onClick={onOpen}>Apply Filters</Button>
                    <InputGroup>
    <InputRightElement pointerEvents='none'>
      <SearchIcon />
    </InputRightElement>
    <Input type='search' placeholder='Search models' bg={'gray.100'} />
  </InputGroup>
                </Stack>
            </Box>

            <Card>
                <CardBody>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Brand<ArrowUpIcon /> </Th>
                                <Th>Series</Th>
                                <Th>Model</Th>
                                <Th>Manufacturer</Th>
                                <Th>Details</Th>
                                <Th>Year</Th>
                                <Th>Origin</Th>
                                <Th>Category</Th>
                                <Th>Edit</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((d) => {
                                return (
                                    <Tr key={d.id}>
                                        <Td>{d.brand.name}</Td>
                                        <Td>{d.series.name}</Td>
                                        <Td>{d.name}</Td>
                                        <Td>{d.manufacturer?.name}</Td>
                                        <Td>{d.detail}</Td>
                                        <Td>{d.year}</Td>
                                        <Td>{d.manufacturer?.country?.name}</Td>
                                        <Td>{d.category?.name}</Td>
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
            <Pagination/>
        </div >
    )
};

export default ModelsList;