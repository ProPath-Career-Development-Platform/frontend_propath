import React, { Component } from "react";
import Chart from 'react-apexcharts';
import {Card, CardBody} from "@nextui-org/react";

class RevenueChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "Revenue",
        data: [10250, 13000, 17700, 22500, 24300, 26000]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#814dde'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 4
        },
        title: {
          text: 'Subscription Revenue',
          align: 'left',
          style: {
            fontSize: '20px', 
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif', 
            color: '#000',
          }
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
  }

  render() {
    return (
      <Card>
      <CardBody className='px-8 py-6'>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="line" height={400} />
        </div>
        <div id="html-dist"></div>
        </CardBody>
      </Card>
    )
  }
}

export default RevenueChart;
