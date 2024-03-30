import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Card, CardBody, HStack, Box  } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';
import PieChart from '../components/pie-chart/pie-chart.component';

const Home = () => {

    return (
        <>
            <PageTitle Title="Home" SubTitle="Dashboard"></PageTitle>
            <Card>
                <CardBody>

                    <HStack spacing='24px'>
                        <Box w='40px' h='40px' bg='yellow.200'>
                            1
                        </Box>
                        <Box w='40px' h='40px' bg='tomato'>
                            2
                        </Box>
                        <Box w='40px' h='40px' bg='pink.100'>
                            3
                        </Box>
                    </HStack>

                    <PieChart
                        title={"Brands"}
                        route={"http://localhost:3001/dashboard/brand/piechart"}>
                    </PieChart>

                    <PieChart
                        title={"Manufacturers"}
                        route={"http://localhost:3001/dashboard/manufacturer/piechart"}>
                    </PieChart>

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
        </>
    )
};

export default Home;