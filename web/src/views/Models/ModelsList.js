import { Card, CardBody, Stack, Button, Box } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import PageTitle from "../../components/PageTitle";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination, { ResetPageNumber } from "../../components/pagination/pagination";
import SearchInput from "../../components/search/search-input.component";
import ModelTable from "../../components/model-table/model-table.component";
import { Delete } from "../Models/model-service";

const ModelsList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(JSON.parse(localStorage.getItem("pageNumber")) || 1);
    const [rows, setRows] = useState(JSON.parse(localStorage.getItem("rows")) || 0);
    const [searchExpression, setSearchExpression] = useState(JSON.parse(localStorage.getItem("searchExpression")) || "");
    const [isLoading, setIsLoading] = useState(false);
    const [reload, setReload] = useState(0);

    const newModel = () => {
        navigate('/models/form');
    }

    function countUrl() {
        let url = "http://localhost:3001/models/count";
        url += addSearch("?");
        return url;
    }

    function listUrl() {
        let url = "http://localhost:3001/models";
        url += addPage("?");
        url += addSearch("&");
        return url;
    }

    function addPage(delimiter) {
        return delimiter + new URLSearchParams({ pageNumber })
    }

    function addSearch(delimiter) {
        return delimiter + new URLSearchParams({ "search": searchExpression });
    }

    function search(searchExpression) {
        setIsLoading(true);
        setSearchExpression(searchExpression);



        //setPageNumber(1);

        console.log('rows: ' + rows);
        console.log('pageNumber: ' + pageNumber);

        // if the page number if greather than the available number of pages.....
        const resetedPageNumber = ResetPageNumber(rows, pageNumber);

        console.log('resetedPageNumber: ' + resetedPageNumber);

        if (resetedPageNumber != pageNumber)
            setPageNumber(resetedPageNumber);
    }

    function deleteModel(id) {
        Delete(id);
        setReload(id);
    }

    useEffect(() => {
        fetch(countUrl(),
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setRows(data);
            })
    }, [reload, pageNumber, searchExpression]);

    useEffect(() => {
        fetch(listUrl(),
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setData(data);
            })
    }, [reload, pageNumber, searchExpression]);

    useEffect(() => {
        localStorage.setItem('pageNumber', JSON.stringify(pageNumber));
        localStorage.setItem('searchExpression', JSON.stringify(searchExpression));
        localStorage.setItem('rows', JSON.stringify(rows));
        setIsLoading(false);
    }, [data])

    return (
        <div>
            <PageTitle Title="Models" SubTitle="List with all models"></PageTitle>
            <Box marginBottom={'8px'}>
                <Stack direction={'row'} spacing={2} verticalAlign={'middle'}>
                    <Button colorScheme='green' leftIcon={<AddIcon />} size='sm' onClick={newModel} >New Model</Button>
                    <SearchInput
                        search={(value) => search(value)}
                        isLoading={isLoading}
                        initialValue={searchExpression}>
                    </SearchInput>
                </Stack>
            </Box>
            <Card>
                <CardBody>
                    <ModelTable
                        data={data}
                        onDelete={(id) => deleteModel(id)}>
                    </ModelTable>
                </CardBody>
            </Card>
            <Pagination
                pageNumber={pageNumber}
                rows={rows}
                changePageNumber={value => setPageNumber(value)} />
        </div >
    )
};

export default ModelsList;