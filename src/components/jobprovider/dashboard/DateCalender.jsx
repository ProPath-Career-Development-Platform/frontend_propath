import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CircularProgress from '@mui/joy/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



import { ThemeProvider } from '@mui/joy/styles';
import { createTheme } from '@mui/material/styles';








function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected = !outsideCurrentMonth && highlightedDays.some(d => dayjs(d).isSame(day, 'day'));

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      
      badgeContent={isSelected ? <CheckCircleIcon sx={{ fontSize:'17px'}} color='success'/> : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}


export default function DateCalendarServerRequest({highlightedDays, setHighlightedDays, onChange}) {
  
 
  
  


  

  

  const theme = createTheme({
    palette: {
      primary: {
        main: '#5F35AE',
        light: '#A374F9',
      },
      
    }
  });

  return (
    <ThemeProvider theme={theme}>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        
        renderLoading={() => <CircularProgress />}
        slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}

        

          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 5,
            
        
          }}

          onChange={onChange}

          
      />
    </LocalizationProvider>
      </ThemeProvider>
    
  );
}
