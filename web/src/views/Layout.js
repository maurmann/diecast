import { Outlet } from "react-router-dom";
import { Menu, MenuItem, MenuList, MenuButton, Text, HStack, Link, Box } from '@chakra-ui/react';

document.body.style.background = "#C7C7C7";

const Layout = () => {

    return (
        <>
            <div style={{ position: "absolute", height: "70px", width: "111px", top: "5px", right: "15px" }}>
                <img src={require('../assets/mm.png')} alt={'Mistery Machine'} />
            </div>
            <HStack h="40px" bg="#C7483F" >
                <HStack ml="12px">
                    <Text fontSize='2xl' fontWeight={"bold"} color={"#DBCD48"}> Diecast Database</Text >
                </HStack>
            </HStack >
            <HStack h="40px" bgGradient="linear(to-r,#50A1E2,#69B4EB)">
                <HStack ml="12px" spacing="6">
                    <Link href='/'>Home</Link >
                    <Link href='/Models'>Models</Link >
                </HStack>
                <div style={{ marginLeft: "12px" }} >
                </div>
            </HStack >
            <Box ml="12px" mr="12px" mt="6px">
                <Outlet />
            </Box>
        </ >
    )
};

export default Layout;