import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const jobData = [
  {
    id: 1,
    jobtitle: "Software Engineer",
    count: 100,
  },
  {
    id: 2,
    jobtitle: "UI/UX Engineer",
    count: 50,
  },
  {
    id: 3,
    jobtitle: "QA Engineer",
    count: 150,
  },
  {
    id: 4,
    jobtitle: "Business Analyst",
    count: 300,
  },
  {
    id: 5,
    jobtitle: "DevOps Engineer",
    count: 10,
  },
];

function BarChart({ chartData }) {
  return (
    <div>
      <Bar data={chartData} /> 
      
    </div>
  );
}

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: jobData.map((data) => data.jobtitle),
    datasets: [
      {
        label: "Number of Applicants for Each Job",
        data: jobData.map((data) => data.count),
        backgroundColor: ['#A374F9','#C69EFF','#C69EFF','#E1CBFF'],
        borderColor:  '#1D0A42',
        borderWidth: 2,
       
      },
    ],
  });

  return <BarChart chartData={chartData} />;
};

export default ChartComponent;
