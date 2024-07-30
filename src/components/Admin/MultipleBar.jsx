import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function BarChart({ chartData }) {
  return (
    <div>
      <Bar data={chartData} /> 
    </div>
  );
}

const MultipleBarComponent = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.item1),
    datasets: [
      {
        label: "Virtual",
        data: data.map((item) => item.item2),
        backgroundColor: ['#C69EFF','#E1CBFF'],
        borderColor: '#1D0A42',
        borderWidth: 1,
      },
      {
        label: "Physical",
        data: data.map((item) => item.item3),
        backgroundColor: ['#C69EFF','#E1CBFF'],
        borderColor: '#1D0A42',
        borderWidth: 1,
      },
    ],
  };

  return <BarChart chartData={chartData} />;
};

export default MultipleBarComponent;
