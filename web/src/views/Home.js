import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Card, CardBody } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';
import { LineChart, Line,PieChart,Tooltip,Pie, ResponsiveContainer,Cell } from 'recharts';
import { useEffect, useState } from 'react';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 410, pv: 2300, amt: 2200 },
{ name: 'Page C', uv: 380, pv: 2100, amt: 2100 }
];

const pie = [ { "name": "Hot Wheels", "value": 290 }, { "name": "Tomica", "value": 28 }, { "name": "Matchbox", "value": 16 }, { "name": "Greenlight", "value": 9 }, { "name": "Majorette", "value": 4 }, { "name": "other", "value": 14 } ] 

const pieColors = ["#0B5345","#0E6655","#117A65","#138D75","#73C6B6","#D0ECE7"]

const Home = () => {

    const [brandPieChart, setBrandPieChart] = useState();

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

                <PieChart width={730} height={250}>
                <Pie data={brandPieChart} dataKey="value" nameKey="name" label>
                {
                    pieColors.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                    ))
                }
                </Pie>
                <Tooltip></Tooltip>
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
        </div >
    )
};

export default Home;