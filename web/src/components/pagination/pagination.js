import { Button, Stack } from "@chakra-ui/react"

const CalculateNumberOfPages = (rows) => {
    return Math.floor(rows / 10) + (rows % 10 > 0 ? 1 : 0);
};

export const ResetPageNumber = (rows, pageNumber) => {
    const numberOfPages = CalculateNumberOfPages(rows);

    if (pageNumber > numberOfPages)
        return 1;

    return pageNumber;
}

const Pagination = (props) => {
    const MAX_PAGES_TO_RENDER = 5;
    const MIDDLE_POSITION = 3;
    const numberOfPages = CalculateNumberOfPages(props.rows);
    const pages = [];

    // if number of pages is lower or equal than the number of pages to display
    // in this case always display from 1 to numberofPages
    if (numberOfPages <= MAX_PAGES_TO_RENDER) {
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i);
        }
    }
    else {
        // firt pages
        if (props.pageNumber <= MIDDLE_POSITION) {
            for (let i = 1; i <= MAX_PAGES_TO_RENDER; i++) {
                pages.push(i);
            }
        }
        // final pages        
        else if (numberOfPages - props.pageNumber < MIDDLE_POSITION) {
            for (let i = numberOfPages - MAX_PAGES_TO_RENDER + 1; i <= numberOfPages; i++) {
                pages.push(i);
            }
        }
        // intermediary pages
        else {
            for (let i = props.pageNumber - (MIDDLE_POSITION - 1); i <= props.pageNumber + (MIDDLE_POSITION - 1); i++) {
                pages.push(i);
            }
        }
    }

    const isFirstPage = props.pageNumber === 1;
    const isLastPage = props.pageNumber === numberOfPages;

    function gotoPage(pageNumber) {
        props.changePageNumber(pageNumber);
    }

    return (
        <Stack mt={'12px'} mb={'12px'} direction={'row'} spacing={1}>
            <Button isDisabled={isFirstPage} onClick={() => gotoPage(1)}>First</Button>
            <Button isDisabled={isFirstPage} onClick={() => gotoPage(props.pageNumber - 1)}>Previous</Button>
            {pages.map((x) => {
                return (
                    <Button key={x}
                        isDisabled={x === props.pageNumber}
                        onClick={() => gotoPage(x)}>{x}
                    </Button>
                )
            })}
            <Button isDisabled={isLastPage} onClick={() => gotoPage(props.pageNumber + 1)} >Next</Button>
            <Button isDisabled={isLastPage} onClick={() => gotoPage(numberOfPages)} >Last</Button>
        </Stack>
    )
}
export default Pagination
