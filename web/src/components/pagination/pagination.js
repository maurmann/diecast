import { Button, Stack } from "@chakra-ui/react"

const Pagination = (props) => {

    const MAX_PAGES_TO_RENDER = 10;
    const MIDDLE_POSITION = 5;
    let pagesToDisplay = props.numberOfPages > MAX_PAGES_TO_RENDER ? MAX_PAGES_TO_RENDER : props.numberOfPages;



    const pages = [];

    // if number of pages is lower or equal than the number of pages to display
    // in this case always display from 1 to numberofPages
    if (props.numberOfPages <= pagesToDisplay) {
        for (let i = 1; i <= pagesToDisplay; i++) {
            pages.push(i);
        }
    }
    else {
        // first pages
        if (props.pageNumber <= MIDDLE_POSITION) {
            for (let i = props.pageNumber - (MIDDLE_POSITION - 1); i <= props.numberOfPages; i++) {
                pages.push(i);
            }
        }
        // final pages
        else if (props.numberOfPages - MIDDLE_POSITION <= props.pageNumber) {
            for (let i = props.numberOfPages - pagesToDisplay; i <= pagesToDisplay; i++) {
                pages.push(i);
            }
        }
        // middle pages
        else {
            for (let i = props.pageNumber - (MIDDLE_POSITION - 1); i <= props.numberOfPages; i++) {
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

