import { Button, Stack } from "@chakra-ui/react"

const Pagination = (props) => {

    const MAX_PAGES_TO_RENDER = 5;
    const MIDDLE_POSITION = 3;




    const pages = [];

    // if number of pages is lower or equal than the number of pages to display
    // in this case always display from 1 to numberofPages
    if (props.numberOfPages <= MAX_PAGES_TO_RENDER) {
        for (let i = 1; i <= props.numberOfPages; i++) {
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
        else if (props.numberOfPages - props.pageNumber < MIDDLE_POSITION) {
            for (let i = props.numberOfPages - MAX_PAGES_TO_RENDER + 1; i <= props.numberOfPages; i++) {
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
    const isLastPage = props.pageNumber === props.numberOfPages;

    function gotoPage(pageNumber) {
        console.log(pageNumber);
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
            <Button isDisabled={isLastPage} onClick={() => gotoPage(props.numberOfPages)} >Last</Button>
        </Stack>
    )
}

export default Pagination

