import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Card, CardBody } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';
import { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react"; 

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
                setBrandPieChart(data);
            })
    }, []);

    const option = {
        title: {
          text: 'Brands',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Brands',
            type: 'pie',
            radius: '60%',
            data: brandPieChart,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
    };


    return (
        <div>
            <PageTitle Title="Home" SubTitle="Dashboard"></PageTitle>
            <Card>
                <CardBody width={600} height={600}>

                <ReactEcharts option={option} />

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