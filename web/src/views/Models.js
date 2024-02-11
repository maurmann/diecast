import { Card, CardBody, Table, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";
import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";

const Models = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/models",
            {
                method: "GET"

            })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
    }, []);



    return (
        data && <div>
            <PageTitle Title="Models" SubTitle="List of Models"></PageTitle>

            <Card>
                <CardBody>

                    <Table variant='simple'>

                        <Thead>
                            <Tr>
                                <Th>Model</Th>
                                <Th>Model Brand</Th>
                                <Th>Model Series</Th>
                                <Th>Vehicle</Th>
                                <Th>Vehicle Manufacturer</Th>
                                <Th>Vehicle Origin</Th>
                                <Th>Vehicle Category</Th>
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