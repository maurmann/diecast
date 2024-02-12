import { Input, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ModelsFilter = (props) => {

    return (
        <>
            <Drawer
                isOpen={props.isOpen}
                placement='right'
                onClose={props.onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Available Filters</DrawerHeader>

                    <DrawerBody>
                        Filters
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={props.onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Apply</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default ModelsFilter