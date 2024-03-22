export const parseIntOrNull = (value) => {
    if (!value)
        return null;

    return parseInt(value);
}

export const parseStringOrNull = (value) => {
    if (!value || value.trim().length==0)
        return null;

    return value.trim();
}