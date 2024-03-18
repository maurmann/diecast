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

export const Delete = async(id)=>{
    await fetch("http://localhost:3001/models/id/" + id, {
        method: "DELETE",
    });
}