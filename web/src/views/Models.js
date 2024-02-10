import { Card, CardBody, Table, Th, Tr, Thead, Tbody, Td, Heading } from "@chakra-ui/react";
const Models = () => {
    return (
        <div>

            <Heading size='md'>Models</Heading>

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
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>
                    </Table>

                </CardBody>
            </Card>


        </div >


    )
};

export default Models;