import { Outlet } from "react-router-dom";
import { Menu, MenuItem, MenuList, MenuButton, Text, HStack, Link, Box } from '@chakra-ui/react';

document.body.style.background = "#C7C7C7";

const Layout = () => {

    return (
        <>
            <HStack h="40px" bg="#C7483F" >
                <HStack ml="12px">
                    <Text fontSize='2xl' fontWeight={"bold"} color={"#DBCD48"}> Diecast Database</Text >
                </HStack>

                <Box ml="60px" mt="30px">
                    <img src={require('../assets/mm.png')} alt={'Mistery Machine'} />
                </Box>
            </HStack >
            <HStack h="40px" bgGradient="linear(to-r,#50A1E2,#69B4EB)">
                <HStack ml="12px" spacing="8">
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
                <div style={{ marginLeft: "12px" }} >
                </div>
            </HStack >
            <Box ml="12px" mr="12px" mt="8px">
                <Outlet />
            </Box>
        </ >
    )
};

export default Layout;