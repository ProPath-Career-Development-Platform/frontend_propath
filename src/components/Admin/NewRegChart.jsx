import React, { Component } from "react";
import Chart from 'react-apexcharts';
import {Card, CardBody} from "@nextui-org/react";

class NewRegChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Companies',
            data: [44, 55, 57, 56, 61, 58],
            color: '#5b2491' 
          }, {
            name: 'Users',
            data: [76, 85, 101, 98, 87, 105],
            color: '#ab78de' 
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            title: {
                text: 'New Registrations',
                align: 'left',
                style: {
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif', 
                  color: '#000',
                }
              },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            fill: {
              opacity: 1
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
                    <Chart options={this.state.options} series={this.state.series} type="bar" height={400} />
                    </div>
                    <div id="html-dist"></div>
                </CardBody>
          </Card>
        );
      }
    }

export default NewRegChart;
