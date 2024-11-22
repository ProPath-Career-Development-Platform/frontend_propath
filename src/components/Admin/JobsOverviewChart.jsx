import React, { Component } from "react";
import Chart from 'react-apexcharts';
import { Card, CardBody } from "@nextui-org/react";

class JobsOverviewChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'OCTOBER',
            data: [44, 55, 41, 67, 22, 43, 25, 32, 55],
            color: '#732fca' 
          }, {
            name: 'NOVEMBER',
            data: [13, 23, 20, 8, 13, 27,31, 35, 8],
            color: '#9966da' 
          },{
            name: 'DECEMBER',
            data: [21, 7, 25, 13, 22, 8, 10, 12, 22],
            color: '#c0a0e8' 
          }],
          options: {
            chart: {
              type: 'bar',
              height: 380,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
                columnWidth: "60%", 
                dataLabels: {
                  total: {
                    enabled: true,
                    style: {
                      fontSize: '13px',
                      fontWeight: 900
                    }
                  }
                }
              },
            },
            xaxis: {
              categories: ['Infor & Comm Tech', 'Accounting', 'Administration', 'Financial', 'Customer Service',
                'Construction', 'Education', 'Healthcare', 'Hospitality'
              ],
            },
            title: {
                text: 'Posted Jobs Overview',
                align: 'left',
                offsetX: 10,
                style: {
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif', 
                  color: '#000',
                }
              },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
        
        
        };
      }

    render() {
        return (
            <Card>
                <CardBody className='px-8 py-6'>
                    <div id="chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            height={400}
                        />
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default JobsOverviewChart;
