import React, { Component } from 'react'
import Chart from 'react-apexcharts';
import { Card, CardBody } from "@nextui-org/react";

class EventOverviewChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'OCTOBER',
            data: [4, 5, 4, 7, 2, 3, 5, 3, 5],
            color: '#732fca' 
          }, {
            name: 'NOVEMBER',
            data: [1, 2, 8, 8, 3, 7,3, 5, 8],
            color: '#9966da' 
          },{
            name: 'DECEMBER',
            data: [2, 7, 5, 3, 2, 8, 1, 2, 2],
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
              categories: ['Infor & Comm', 'Accounting', 'Administration', 'Financial', 'Customer Service',
                'Construction', 'Education', 'Healthcare', 'Hospitality'
              ],
            },
            title: {
                text: 'Posted Workshops/Meetups Overview',
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

export default EventOverviewChart