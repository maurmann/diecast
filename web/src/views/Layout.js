import { Outlet } from "react-router-dom";
import { Divider, Card, Menu, MenuItem, MenuList, MenuButton, Text, Container, HStack, Link, CardBody } from '@chakra-ui/react'

const Layout = () => {
    return (
        <Container maxW="bg" >
            <Text fontSize='2xl'> Diecast Database</Text >
            <Divider />
            <HStack spacing='24px' >
                <Link href='/'>Home</Link >
                <Menu>
                    <MenuButton>Models</MenuButton>
                    <MenuList>
                        <MenuItem as='a' href='/Models'>Models</MenuItem>
                        <MenuItem as='a' href='/ModelBrands'>Model Brands</MenuItem>
                        <MenuItem as='a' href='/ModelSeries'>Model Series</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton>Vehicles</MenuButton>
                    <MenuList>
                        <MenuItem as='a' href='/Vehicles'>Vehicles</MenuItem>
                        <MenuItem as='a' href='/VehicleManufacturers'>Vehicle Manufacturers</MenuItem>
                        <MenuItem as='a' href='/VehicleCategories'>Vehicle Categories</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <Card marginTop="12px">
                <CardBody>
                    <Outlet />
                </CardBody>
            </Card>

        </Container >
    )
};

export default Layout;