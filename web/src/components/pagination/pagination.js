import { Button, IconButton, Stack } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const Pagination = () => {
    return (
        <Stack mt={'12px'} mb={'12px'} direction={'row'} spacing={1}>
            <Button>First</Button>} />
            <Button>Previous</Button>} />
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>Next</Button>} />
            <Button>Last</Button>} />
        </Stack>
    )
}

export default Pagination

