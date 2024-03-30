import ReactEcharts from "echarts-for-react"; 
import { useEffect, useState } from 'react';

const PieChart = (props) => {

  const [pieChartData, setPieChartData] = useState();

  useEffect(() => {
    fetch(props.route,
        {
            method: "GET"
        })
        .then((response) =>
            response.json())
        .then((data) => {
          setPieChartData(data);
        })
    }, []);

    const option = {
        title: {
          text: props.title,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'pie',
            type: 'pie',
            radius: '60%',
            data: pieChartData,
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
        <ReactEcharts option={option} />
    )
}

export default PieChart