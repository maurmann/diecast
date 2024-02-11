import { Heading, Text } from "@chakra-ui/react"

const PageTitle = (props) => {
    return (
        <>
            <Heading size='lg'>{props.Title}</Heading>
            <Text>{props.SubTitle}</Text>
        </>
    )
}

export default PageTitle