import { Box, Heading, Text } from "@chakra-ui/react"

const PageTitle = (props) => {
    return (
        <Box marginTop={'8px'} marginBottom={'8px'}>
            <Heading size='lg'>{props.Title}</Heading>
            <Text>{props.SubTitle}</Text>
        </Box>
    )
}

export default PageTitle