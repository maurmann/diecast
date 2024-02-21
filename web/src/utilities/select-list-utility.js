export const readDataKeyFromSelectedItem = (event) => {
    const index = event.target.options.selectedIndex;
    const id = event.target.options[index].getAttribute('data-key');
    return id;
}

