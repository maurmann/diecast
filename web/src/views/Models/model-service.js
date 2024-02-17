//import { MODELS_CREATE_ENDPOINT } from "../../constants/endpoints";

export const Create = (name) => {

    fetch("http://localhost:3001/brands",
        {
            method: "POST",
            body: "{'name': 'putz'}"
        })
        .then((response) => {
            response.json()
        })
        .then((data) => {
            console.log(data)
        })
};

export const  GetModels = async ()=>{

    let list = [];

    await fetch("http://localhost:3001/models",
    {
        method: "GET"
    })
    .then((response) =>
        response.json())
    .then((data) => {
        list = data;
    })

    console.log(data);

    return list;


};