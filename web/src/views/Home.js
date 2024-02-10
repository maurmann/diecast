import { Stat, StatLabel, StatNumber, StatHelpText, Heading, StatGroup } from '@chakra-ui/react'

const Home = () => {
    return (
        <div>
            <Heading size='md'>Home</Heading>
            <StatGroup>
                <Stat>
                    <StatLabel>Hot Wheels</StatLabel>
                    <StatNumber>274</StatNumber>
                    <StatHelpText>Mainline</StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel>Hot Wheels</StatLabel>
                    <StatNumber>34</StatNumber>
                    <StatHelpText>Premium</StatHelpText>
                </Stat>
            </StatGroup>
        </div >
    )
};

export default Home;