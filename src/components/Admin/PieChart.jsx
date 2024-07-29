import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function PieChart({ chartData }) {
  return (
    <div>
      <Pie data={chartData} /> 
    </div>
  );
}

const PieChartComponent = ({ data }) => {
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

  return <PieChart chartData={chartData} />;
};

export default PieChartComponent;
