import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Card, CardBody } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle Title="Home" SubTitle="Dashboard"></PageTitle>
            <Card>
                <CardBody>
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
                </CardBody>
            </Card>
        </div >
    )
};

export default Home;