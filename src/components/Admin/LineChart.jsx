import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
