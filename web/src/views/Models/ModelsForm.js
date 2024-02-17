import PageTitle from "../../components/PageTitle";
import { Card, CardBody, Input, Box, Stack, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, VStack } from '@chakra-ui/react'
import { useLocation } from "react-router-dom"
import { useState } from "react";
import BrandSelect from "../../components/BrandSelect";
import SeriesSelect from "../../components/SeriesSelect";
import VehicleSelect from "../../components/VehicleSelect";
import { ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";
import { modelMapper } from "../../mappers/model.mapper";
import ManufacturerSelectList from "../../components/select-lists/manufacturer-select-list";

const ModelsForm = () => {

    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);
    const id = queryParameters.get("id")
    const [message, setMessage] = useState(id ? "Editing a model" : "New model");

    const [name, setName] = useState("");
    const [brandId, setBrandId] = useState(0);
    const [seriesId, setSeriesId] = useState(0);
    const [manufacturerId, setManufacturerId] = useState(0);
    const [year, setYear] = useState("");

    async function submitForm(event) {

        event.preventDefault();

        const model = modelMapper(name, brandId, seriesId, manufacturerId, year);

        /*
        const model =
        {
            name: name,
            brandId: parseInt(brandId),
            seriesId: parseInt(seriesId),
            vehicleId: null,
            year: parseInt(year)
        };
        */

        try {
            const response = await fetch("http://localhost:3001/models", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(model),
            });

            console.log("Success:", response);
        } catch (error) {
            console.error("Error:", error);
        }
    }




    return (
        <>
            <PageTitle Title="Models" SubTitle={message}></PageTitle>

            <Card>
                <CardBody>
                    <VStack spacing="12px">
                        <FormControl className={"form-controls"}>
                            <FormLabel>Name</FormLabel>
                            <Input colorScheme="whiteAlpha" type='text' onChange={e => setName(e.target.value)} />
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Brand</FormLabel>
                            <BrandSelect
                                value={brandId}
                                brandChanged={value => setBrandId(value)}>
                            </BrandSelect>
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Series</FormLabel>
                            <SeriesSelect
                                brandId={brandId}
                                value={seriesId}
                                seriesChanged={value => setSeriesId(value)}
                            ></SeriesSelect>
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Manufacturer</FormLabel>
                            <ManufacturerSelectList/>
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Year</FormLabel>
                            <Input colorScheme="whiteAlpha" type='number' onChange={e => setYear(e.target.value)} />
                        </FormControl>
                    </VStack>
                    <Box marginTop={"22px"}>
                        <Stack direction={'row'} spacing={2}>
                            <Button colorScheme='green' leftIcon={<CheckIcon />} size='sm' onClick={submitForm} >Confirm</Button>
                            <Button colorScheme='blackAlpha' leftIcon={<ArrowBackIcon />} size='sm' >Cancel</Button>
                        </Stack>
                    </Box>
                </CardBody>
            </Card >
        </>
    )
};

export default ModelsForm;