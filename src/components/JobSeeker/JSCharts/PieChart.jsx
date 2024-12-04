import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Typography } from "@mui/joy";

const PieChart = ({ series, labels, colors, height = 350 , title }) => {
  const chartData = {
    series,
    options: {
      chart: {
        type: "donut",
        height: height,
      },
      labels: labels,
      colors: colors,
      title: {
        text: title,   // Title for the chart
        align: "center",                   // Align the title to the center
        style: {
          fontSize: "20px",               // Font size of the title
          fontWeight: "bold",             // Font weight of the title
          color: "#333",                  // Title color
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} jobs`, // Tooltip formatter
        },
      },
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={height}
      />
    </Box>
  );
};

export default PieChart;
