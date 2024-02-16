export const parseIntOrNull = (value) => {
    if (!value)
        return null;

    return parseInt(value);
}
