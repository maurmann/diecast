//import { MODELS_CREATE_ENDPOINT } from "../../constants/endpoints";




export const Create = async (model) => {
    await fetch("http://localhost:3001/models", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    });
};

export const Update = async (id, model) => {
    await fetch("http://localhost:3001/models/id/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    });
};


export const GetModels = async () => {

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