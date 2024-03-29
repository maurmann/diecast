import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Card, CardBody } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';
import { LineChart, Line,PieChart,Tooltip,Pie, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 410, pv: 2300, amt: 2200 },
{ name: 'Page C', uv: 380, pv: 2100, amt: 2100 }
];

const Home = () => {

    const [brandPieChat, setBrandPieChart] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/dashboard/brand/piechart',
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                console.log(data);
                setBrandPieChart(data);
            })
    }, []);

    return (
        <div>
            <PageTitle Title="Home" SubTitle="Dashboard"></PageTitle>
            <Card>
                <CardBody>

<ResponsiveContainer>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={brandPieChat}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label="name"
                        />
                        <Tooltip />
                    </PieChart>
                    </ResponsiveContainer>

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