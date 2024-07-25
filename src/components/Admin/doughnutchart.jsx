import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DoughnutChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.jobtitle),
    datasets: [
      {
        label: "Number of Job Posts by Each Job role",
        data: data.map((item) => item.count),
        backgroundColor: ['#A374F9','#C69EFF','#C69EFF','#E1CBFF'],
        borderColor: '#1D0A42',
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default DoughnutChartComponent;
