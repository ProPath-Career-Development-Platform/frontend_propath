import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/joy/styles';
import { useColorScheme } from '@mui/joy/styles';
import { LineChart } from '@mui/x-charts/LineChart';



export default function SimpleCharts({userData}) {

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
            const dataset = userData.reduce((acc, user) => {
              const appliedDate = new Date(user.appliedDate);  // Convert to Date object
              const formattedDate = `${(appliedDate.getMonth() + 1).toString().padStart(2, '0')}-${appliedDate.getDate().toString().padStart(2, '0')}`; // Format as MM-DD
            
              // Find if the date already exists in the accumulator
              const existing = acc.find(item => item.date === formattedDate);
            
              if (existing) {
                // If the date exists, increment the count of people joined
                existing.peopleJoined += 1;
              } else {
                // If the date doesn't exist, create a new entry with 1 person joined
                acc.push({ date: formattedDate, peopleJoined: 1 });
              }
              return acc;
            }, []);
            

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