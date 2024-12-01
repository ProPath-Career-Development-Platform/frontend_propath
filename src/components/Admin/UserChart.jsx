import React, { Component } from 'react'
import Chart from 'react-apexcharts';
import {Card, CardBody} from "@nextui-org/react";

class UserChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          series: [{
            name: "Users",
            data: [20, 54, 102, 138, 198, 240, 274, 305, 357]
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
              text: 'Registered User Growth Over Months',
              align: 'left',
              offsetX: 10,
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
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
        };
      }
    
      render() {
        return (
          <Card className='mt-8'>
          <CardBody className='px-2 pt-6 pb-3'>
            <div id="chart">
              <Chart options={this.state.options} series={this.state.series} type="area" height={400} />
            </div>
            <div id="html-dist"></div>
            </CardBody>
          </Card>
        )
      }
    }

export default UserChart