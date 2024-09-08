import React, { Component } from "react";
import Chart from 'react-apexcharts';
import {Card, CardBody} from "@nextui-org/react";

class TotalSubChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Basic',
            data: [10, 17, 22, 29, 35, 45],
            color: '#e0b0ff' 
          }, {
            name: 'Professional',
            data: [0, 2, 5, 10, 17, 22],
            color: '#ffb0e3' 
          }, {
            name: 'Enterprise',
            data: [0, 0, 1, 3, 6, 10],
            color: '#b0ffe0' 
          }],
          options: {
            chart: {
                height: 350,
                type: 'area'
              },
            dataLabels: {
              enabled: false
            },
            title: {
                text: 'Total Subscription Plans',
                align: 'left',
                style: {
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif', 
                  color: '#000',
                }
              },
              stroke: {
                curve: 'smooth'
              },
            xaxis: {
              categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "Total - " + val
                }
              }
            }
          },
        
        
        };
      }   

      render() {
        return (
            <Card>
                <CardBody className='px-8 py-6'>
                    <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="area" height={400} />
                    </div>
                    <div id="html-dist"></div>
                </CardBody>
          </Card>
        );
      }
    }

export default TotalSubChart