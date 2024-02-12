import PageTitle from "../../components/PageTitle";
import { Checkbox, Card, CardBody, Input, Box, Stack, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { useLocation } from "react-router-dom"
import { useState } from "react";
import BrandSelect from "../../components/BrandSelect";
import SeriesSelect from "../../components/SeriesSelect";
import VehicleSelect from "../../components/VehicleSelect";
import { ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";

const ModelsForm = () => {

    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);
    const id = queryParameters.get("id")
    const [message, setMessage] = useState(id ? "Editing a model" : "New model");

    return (
        <>
            <PageTitle Title="Models" SubTitle={message}></PageTitle>

            <Card>
                <CardBody>
                    <FormControl>
                        <FormLabel>Model</FormLabel>
                        <Input colorScheme="whiteAlpha" type='text' />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Brand</FormLabel>
                        <BrandSelect></BrandSelect>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Series</FormLabel>
                        <SeriesSelect></SeriesSelect>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Manufacturer</FormLabel>
                        <VehicleSelect></VehicleSelect>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Year</FormLabel>
                        <Input colorScheme="whiteAlpha" type='number' />
                        <FormHelperText></FormHelperText>
                    </FormControl>

                    <Box marginTop={'12px'}>
                        <Stack direction={'row'} spacing={2}>
                            <Button colorScheme='green' leftIcon={<CheckIcon />} size='sm' >Confirm</Button>
                            <Button colorScheme='blackAlpha' leftIcon={<ArrowBackIcon />} size='sm' >Cancel</Button>
                        </Stack>
                    </Box>

                </CardBody>
            </Card>
        </>
    )
};

export default ModelsForm;