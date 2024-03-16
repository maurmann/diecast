import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton, Button, } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from "react";
import { useEffect, useState } from "react";

const DeleteConfirmation = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    useEffect(() => {
        if (props.showDeleteAction){
            onOpen();
            props.afterOpened();
        }
    }, [props.showDeleteAction]);

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            {props.title}
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            {props.message}
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>

    )
}
export default DeleteConfirmation
