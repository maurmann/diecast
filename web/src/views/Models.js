import { Card, CardBody, Table, Th, Tr, Thead, Tbody, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";

const Models = () => {

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
                console.log(data);
            })
    }, []);

    return (
        <div>
            <PageTitle Title="Models" SubTitle="List with all models"></PageTitle>
            <Card>
                <CardBody>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Model</Th>
                                <Th>Brand</Th>
                                <Th>Series</Th>
                                <Th>Vehicle</Th>
                                <Th>Manufacturer</Th>
                                <Th>Origin</Th>
                                <Th>Category</Th>
                                <Th>Edit</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((d) => {
                                return (
                                    <Tr>
                                        <Td>{d.name}</Td>
                                        <Td>{d.modelBrand.name}</Td>
                                        <Td>{d.modelSeries.name}</Td>
                                        <Td>{d.vehicle.name}</Td>
                                        <Td>{d.vehicle.vehicleManufacturer.name}</Td>
                                        <Td>{d.vehicle.vehicleManufacturer.country}</Td>
                                        <Td>Pickup</Td>
                                        <Td><IconButton isRound={false} colorScheme="blue" variant='outline' icon={<EditIcon />} /></Td>
                                        <Td><IconButton isRound={false} colorScheme="blue" variant='outline' icon={<DeleteIcon />} /></Td>
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

export default Models;