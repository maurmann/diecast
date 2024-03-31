import { Card, CardBody, VStack, StackDivider, Grid, GridItem } from '@chakra-ui/react'
import PageTitle from '../components/PageTitle';
import PieChart from '../components/pie-chart/pie-chart.component';
import Statistics from '../components/statistics/statistics.component';
import { React, useState, useEffect } from "react";

const Home = () => {

    return (
        <>
            <PageTitle Title="Home" SubTitle="Dashboard"></PageTitle>
            <Card>
                <CardBody>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'>
                        
                        <Statistics></Statistics>
                        
                        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                            <GridItem>
                                <PieChart
                                    title={"Brands"}
                                    route={"http://localhost:3001/dashboard/brand/piechart"}
                                    series={"brand"}>
                                </PieChart>
                            </GridItem>
                            <GridItem>
                                <PieChart
                                    title={"Manufacturers"}
                                    route={"http://localhost:3001/dashboard/manufacturer/piechart"}
                                    series={"manufacturer"}>
                                </PieChart>
                            </GridItem>
                            <GridItem>
                                <PieChart
                                    title={"Categories"}
                                    route={"http://localhost:3001/dashboard/category/piechart"}
                                    series={"category"}>
                                </PieChart>
                            </GridItem>
                        </Grid>
                    </VStack>
                </CardBody>
            </Card>
        </>
    )
};

export default Home;