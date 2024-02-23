import PageTitle from "../../components/PageTitle";
import { Card, CardBody, Input, Box, Stack, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, VStack, useToast } from '@chakra-ui/react'
import { useLocation } from "react-router-dom"
import { useState } from "react";
import BrandSelect from "../../components/select/brand-select.component";
import SeriesSelect from "../../components/select/series-select.component";
import { ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";
import { modelMapper } from "../../mappers/model.mapper";
import ManufacturerSelectList from "../../components/select/manufacturer-select.component";
import CategorySelect from "../../components/select/category-select-component";
import { useNavigate } from "react-router-dom";

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
    const [categoryId, setCategoryId] = useState(0);
    const [detail, setDetail] = useState("");
    const [code, setCode] = useState("");

    const navigate = useNavigate();
    const toast = useToast();

    const backToList = () => {
        navigate('/models');
    }

    async function submitForm(event) {
        event.preventDefault();
        const model = modelMapper(name, brandId, seriesId, manufacturerId, year, categoryId, detail, code);
        try {
            const response = await fetch("http://localhost:3001/models", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(model),
            });

            showConfirmation(model.name);
            navigate('/models');
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // TODO: use a promisse toast instead
    function showConfirmation(modelName) {
        
        return (
            toast({
                title: 'Model created.',
                description: `Model ${modelName} added to the database.`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        )
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
                                onParentChange={value => setBrandId(value)}>
                            </BrandSelect>
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Series</FormLabel>
                            <SeriesSelect
                                brandId={brandId}
                                value={seriesId}
                                onParentChange={value => setSeriesId(value)}
                            ></SeriesSelect>
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Manufacturer</FormLabel>
                            <ManufacturerSelectList
                                onParentChange={value => setManufacturerId(value)} />
                        </FormControl>
                        <FormControl className={"form-controls"}>
                            <FormLabel>Year</FormLabel>
                            <Input colorScheme="whiteAlpha" type='number'
                                onChange={e => setYear(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <CategorySelect
                                onParentChange={value => setCategoryId(value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Details</FormLabel>
                            <Input colorScheme="whiteAlpha" type="text" onChange={e => setDetail(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Code</FormLabel>
                            <Input colorScheme="whiteAlpha" type="text"
                                onChange={e => setCode(e.target.value)} />
                        </FormControl>
                    </VStack>
                    <Box marginTop={"22px"}>
                        <Stack direction={'row'} spacing={2}>
                            <Button colorScheme='green' leftIcon={<CheckIcon />} size='sm' onClick={submitForm} >Confirm</Button>
                            <Button colorScheme='blackAlpha' leftIcon={<ArrowBackIcon />} size='sm' onClick={backToList}>  Cancel</Button>
                        </Stack>
                    </Box>
                </CardBody>
            </Card >




        </>
    )
};

export default ModelsForm;