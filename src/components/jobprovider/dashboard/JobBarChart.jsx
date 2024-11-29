import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/joy/styles';
import { useColorScheme } from '@mui/joy/styles';
import axios from 'axios';

export default function JobBarChart() {
  const { mode } = useColorScheme();

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
        const response = await axios.get('http://localhost:8080/jobprovider/analysis/job/barchart', {
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
  const transformedData = chartData.map((job, index) => ({
    jobTitle: job.jobTitle,
    //job.jobTitle.length > 5  ? `${job.jobTitle.substring(0, 5)}...` : job.jobTitle,
    applicantCount: job.jobApplicantCount,
   
  }));

  React.useEffect(() => {
    setTheme(mode === 'light' ? lightTheme : darkTheme);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <BarChart
        tooltip={{
          valueFormatter: ({ row }) => row.jobTitle,
        }}
        loading={load}
        dataset={transformedData}
        xAxis={[{ scaleType: 'band', dataKey: 'jobTitle', label: 'Job Titles',tickPlacement: 'middle', }]}
        yAxis={[{ scaleType: 'linear', dataKey: 'applicantCount', label: 'Applicant Count' }]}
        series={[
          {
            dataKey: 'applicantCount',
            label: 'Number of Applicants',
            color: mode === 'light' ? '#814dde' : '#814dde',
          },
        ]}
        height={300}
        
      />
    </ThemeProvider>
  );
}
