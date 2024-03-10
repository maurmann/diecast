import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Card, CardBody } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';
import { LineChart, Line } from 'recharts';


const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 410, pv: 2300, amt: 2200 },
{ name: 'Page C', uv: 380, pv: 2100, amt: 2100 }
];

const Home = () => {
    return (
        <div>
            <PageTitle Title="Home" SubTitle="Dashboard"></PageTitle>
            <Card>
                <CardBody>

                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    </LineChart>

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