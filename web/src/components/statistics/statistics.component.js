import { useEffect, useState } from 'react';
import { Grid, GridItem, Stat, StatLabel, StatHelpText, StatNumber } from '@chakra-ui/react'

const Statistics = () => {

    const [statisticsData, setStatisticsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/dashboard/brand/series/statistics",
            {
                method: "GET"
            })
            .then((response) =>
                response.json())
            .then((data) => {
                setStatisticsData(data);
            })
    }, []);

    return (
        <Grid templateColumns='repeat(8, 1fr)' gap={2}>
            {statisticsData.map((d, index) => {
                return (
                    <GridItem key="k-{index}">
                        <Stat key="k-{index}">
                            <StatLabel>{d.category}</StatLabel>
                            <StatNumber>{d.value}</StatNumber>
                            <StatHelpText>{d.subcategory}</StatHelpText>
                        </Stat>
                    </GridItem>
                )
            })}
        </Grid>
    )
}

export default Statistics