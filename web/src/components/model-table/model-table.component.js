import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Th, Tr, Thead, Tbody, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowUpIcon } from '@chakra-ui/icons';

const ModelTable = ({data}) => {
    
    const navigate = useNavigate();

    const editModel = (id, event) => {
        navigate(`/models/form?id=${id}`);
    }


    return (
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
    )
}
export default ModelTable;