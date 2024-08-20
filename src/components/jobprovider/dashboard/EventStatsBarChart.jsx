import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/joy/styles';
import { useColorScheme } from '@mui/joy/styles';
import { LineChart } from '@mui/x-charts/LineChart';



export default function SimpleCharts() {

    const { mode } = useColorScheme();
   
  

    const lightTheme = createTheme({



        
    });

    const darkTheme = createTheme({
        components: {
          MuiChartsTooltip: {
            styleOverrides: {
              cell: {
                padding: '8px', // Custom padding for the cell
                backgroundColor: '#333', // Dark background for cells
              },
              labelCell: {
                color: '#fff', // White text for labels
                fontWeight: 'bold', // Bold text for label cells
              },
              markCell: {
                padding: '4px', // Padding for the mark cell
              },
              root: {
                borderRadius: '8px', // Rounded corners for the tooltip
                
              },
              row: {
                borderBottom: '1px solid #ccc', // Border between rows
              },
              table: {
                width: '100%', // Full width table
              },
              valueCell: {
                color: '#ff5722', // Orange text for values
                fontWeight: '600', // Semi-bold text for value cells
              },
            },
          },
        },
      });

      const [theme, setTheme] = React.useState(lightTheme);

        React.useEffect(() => {
            setTheme(mode === 'light' ? lightTheme : darkTheme);
            }, [mode]);

            // Sample dataset
  const dataset = [
    { date: '08-01', peopleJoined: 50 },
    { date: '08-02', peopleJoined: 10 },
    { date: '08-03', peopleJoined: 20 },
    { date: '08-04', peopleJoined: 6 },
    { date: '08-05', peopleJoined: 13 },
    { date: '08-06', peopleJoined: 20 },
    { date: '08-07', peopleJoined: 2 },
    { date: '08-08', peopleJoined: 11 },
    { date: '08-09', peopleJoined: 9 },
    { date: '08-10', peopleJoined: 7 },
    // more data
  ];

  // Transform dataset for BarChart
  const transformedData = dataset.map(entry => ({
    date: entry.date,
    peopleJoined: entry.peopleJoined,
  }));

  // Chart settings
  const chartSetting = {
    xAxis: [{ scaleType: 'band', dataKey: 'date' }],
    yAxis: [{ scaleType: 'linear', dataKey: 'peopleJoined' }],
    series: [{ dataKey: 'peopleJoined', label: 'Number of People Joined' }],
  };

      
      

  


  return (

    <ThemeProvider theme={theme}>

<LineChart
      dataset={transformedData}
      xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
      yAxis={[{ scaleType: 'linear', dataKey: 'peopleJoined' }]}
      series={[{ dataKey: 'peopleJoined', label: 'Number of People Joined' }]}
      {...chartSetting}
      height={300}
   
    />

    </ThemeProvider>
  );
}