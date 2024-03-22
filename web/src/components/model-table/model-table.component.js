import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Th, Tr, Thead, Tbody, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowUpIcon, CheckIcon } from '@chakra-ui/icons';
import DeleteConfirmation from "../delete-confirmation/delete-confirmation.component";
import { Delete } from "../../views/Models/model-service";

const ModelTable = ({ data }) => {
    const navigate = useNavigate();
    const [showDeleteAction, setShowDeleteAction] = useState(false);
    const [deleteConfirmationMessage, setDeleteConfirmationMessage] = useState("");
    const [idToDelete, setIdToDelete] = useState(0);
    const [tableData, setTableData] = useState([]);

    const initializeActionState = () => {
        const initialState = new Array(data.length).fill(true);
        setActionState(initialState);
    };

    const initializeTableData = () => {
        let initialTableData = [];
        for(let i=0;i<data.length;i++){
            initialTableData.push( {...data[i] , isRowDeleted: false});
        }
        setTableData(initialTableData);
    };

    useEffect(() => {
        initializeTableData();
    }, [data])

    const editModel = (id, event) => {
        navigate(`/models/form?id=${id}`);
    }

    const deleteModel = (id, name, event) => {
        setDeleteConfirmationMessage(`Confirm deletion of model ${name} with id ${id}?`);
        setShowDeleteAction(true);
        setIdToDelete(id);
    }

    // TODO
    //
    // actionState cannot be referenced by index when render the content.
    // I believe a possible solution is:
    //   1. add the property to the data 
    //   2. initialize the property with true for all items
    //   3. render using the property with map 


    const executeDelete = async () => {
        // await Delete(idToDelete);
        // window.location.reload();

        console.log(idToDelete);

        let changedTableData = tableData;

        const deletedIndex = tableData.findIndex((item) => item.id == idToDelete);

        changedTableData[deletedIndex].name = 'deleted';
        changedTableData[deletedIndex].isRowDeleted = true;

        setTableData(changedTableData);

    }

    return (
        <>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Brand<ArrowUpIcon /> </Th>
                        <Th>Series</Th>
                        <Th>Model</Th>
                        <Th>Manufacturer</Th>
                        <Th>Details</Th>
                        <Th>Year</Th>
                        <Th>Origin</Th>
                        <Th>Category</Th>
                        <Th>Code</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((d,index) => {
                        return (
                            <Tr key={d.id} rowid={d.id}>
                                <Td>{d.id}</Td>
                                <Td>{d.brand.name}</Td>
                                <Td>{d.series?.name}</Td>
                                <Td>{d.name}</Td>
                                <Td>{d.manufacturer?.name}</Td>
                                <Td>{d.detail}</Td>
                                <Td>{d.year}</Td>
                                <Td>{d.manufacturer?.country?.name}</Td>
                                <Td>{d.category?.name}</Td>
                                <Td>{d.code}</Td>
                                <Td>
                                    <IconButton
                                        isDisabled={d.isRowDeleted}
                                        isRound={false}
                                        colorScheme="blue"
                                        size="sm"
                                        variant='outline'
                                        icon={<EditIcon />}
                                        onClick={(event) => editModel(d.id, event)} />
                                </Td>
                                <Td>
                                    <IconButton
                                        isDisabled={d.isRowDeleted}
                                        isRound={false}
                                        colorScheme="blue"
                                        size="sm"
                                        variant='outline'
                                        icon={<DeleteIcon />}
                                        onClick={(e) => deleteModel(d.id, d.name, e)} />
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>

            <DeleteConfirmation
                title={"Delete Model"}
                message={deleteConfirmationMessage}
                showDeleteAction={showDeleteAction}
                afterOpened={() => setShowDeleteAction(false)}
                afterConfirmed={() => executeDelete()}>
            </DeleteConfirmation>
        </>
    )
}
export default ModelTable;