export const create = async () => {
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