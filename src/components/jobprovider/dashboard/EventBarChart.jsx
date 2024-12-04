import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/joy/styles';
import { useColorScheme } from '@mui/joy/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function JobBarChart() {
  const { mode } = useColorScheme();
  const navigate = useNavigate();
  const [load, setLoad] = React.useState(true);

  const lightTheme = createTheme();
  const darkTheme = createTheme({
    components: {
      MuiChartsTooltip: {
        styleOverrides: {
          cell: {
            padding: '8px',
            backgroundColor: '#333',
          },
          labelCell: {
            color: '#fff',
            fontWeight: 'bold',
          },
          root: {
            borderRadius: '8px',
          },
        },
      },
    },
  });

  const [theme, setTheme] = React.useState(lightTheme);
  const [chartData, setChartData] = React.useState([]);

  // Fetch job data
  React.useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/jobprovider/analysis/event/barchart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setChartData(response.data);
        setLoad(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Transform data for BarChart
  const transformedData = chartData.map((event, index) => ({
    id: event.eventId,
    eventTitle: event.eventTitle,
    eventParticipants: event.eventParticipants,
   
  }));

  console.log(transformedData);

  React.useEffect(() => {
    setTheme(mode === 'light' ? lightTheme : darkTheme);
  }, [mode]);


  return (
    <ThemeProvider theme={theme}>
      <BarChart
        loading={load}
        dataset={transformedData}
        xAxis={[{ scaleType: 'band', dataKey: 'eventTitle', label: 'Event Titles' ,tickPlacement: 'middle'}]}
        yAxis={[{ scaleType: 'linear', dataKey: 'eventParticipants', label: 'Register Count'}]}
        series={[
          {
            dataKey: 'eventParticipants',
            label: 'Number of Participants',
            color: mode === 'light' ? '#814dde' : '#814dde',
          },
        ]}
        height={300}
        
      />
    </ThemeProvider>
  );
}
