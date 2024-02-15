import { useDisclosure, IsOpen, onOpen, onClose, Card, CardBody, Table, Th, Tr, Thead, Tbody, Td, IconButton, Stack, Button, Box } from "@chakra-ui/react";
import { AddIcon, SearchIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import PageTitle from "../../components/PageTitle";
import { useEffect, useState } from "react";
import ModelsFilter from "./ModelsFilter";
import React from "react";
import { useNavigate } from "react-router-dom";

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
                <Stack direction={'row'} spacing={2}>
                    <Button colorScheme='green' leftIcon={<AddIcon />} size='sm' onClick={newModel} >New Model</Button>
                    <Button colorScheme='blackAlpha' leftIcon={<SearchIcon />} size='sm' onClick={onOpen}>Apply Filters</Button>
                </Stack>
            </Box>

            <Card>
                <CardBody>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Model</Th>
                                <Th>Brand</Th>
                                <Th>Series</Th>
                                <Th>Manufacturer</Th>
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
                                        <Td>{d.name}</Td>
                                        <Td>{d.modelBrand.name}</Td>
                                        <Td>{d.modelSeries.name}</Td>
                                        <Td>{d.vehicle?.vehicleManufacturer?.name}</Td>
                                        <Td>{d.year}</Td>
                                        <Td>To Do</Td>
                                        <Td>Pickup</Td>
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
        </div >
    )
};

export default ModelsList;