import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const jobDataPie = [
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
];

function PieChart({ chartData }) {
  return (
    <div>
      <Pie data={chartData} /> 
      
    </div>
  );
}

const PieChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: jobDataPie.map((data) => data.jobtitle),
    datasets: [
      {
        label: "Number of Job Posts by Each Job role",
        data: jobDataPie.map((data) => data.count),
         backgroundColor: ['#A374F9','#C69EFF','#C69EFF','#E1CBFF'],
        borderColor:  '#1D0A42',
        borderWidth: 1,
       
      },
    ],
  });

  return <PieChart chartData={chartData} />;
};

export default PieChartComponent;
