import * as React from 'react';
import Card from '@mui/joy/Card';
import  CardContent  from '@mui/joy/CardContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Divider from '@mui/joy/Divider';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Button from '@mui/joy/Button';
import DateCalender from '../../../components/jobprovider/dashboard/DateCalender';
import TimeSlider from '../../../components/jobprovider/dashboard/TimeSlider';
import TimeDuration from '../../../components/jobprovider/dashboard/TimeDuration';
import TimeSlots from '../../../components/jobprovider/dashboard/TimeSlots';
import dayjs from 'dayjs';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import AspectRatio from '@mui/joy/AspectRatio';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import CardActions from '@mui/joy/CardActions';
import { Link as RouterLink } from 'react-router-dom';

function InterviewSchedule() {
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [tabData, setTabData] = React.useState([]);

  const handleDateChange = (newDate) => {
    const dateString = newDate.format('MM/DD/YY');
    setHighlightedDays((prev) => [...prev, newDate.toDate()]);
    const tabTitle = newDate.format('MM/DD');
    if (!tabData.some((tab) => tab.date === dateString)) {
      setTabData((prev) => [
        ...prev,
        {
          date: dateString,
          tabTitle: tabTitle,
          sliderValue: [8, 12],
          duration: 60,
          holdTime: [],     
          timeSlots: [],
        },
      ]);
    }
  };

  const handleSliderChange = (dateString, newValue) => {
    setTabData((prev) =>
      prev.map((tab) =>
        tab.date === dateString ? { ...tab, sliderValue: newValue,holdTime: [] } : tab
      )
    );
  };

  const handleDurationChange = (dateString, newDuration) => {
    setTabData((prev) =>
      prev.map((tab) =>
        tab.date === dateString ? { ...tab, duration: parseInt(newDuration, 10),holdTime: [] } : tab
      )
    );
  };

  const handleTimeSlotChange = (dateString, newHoldTime) => {
    setTabData((prev) =>
      prev.map((tab) =>
        tab.date === dateString ? { ...tab, holdTime: newHoldTime } : tab
      )
    );
  };

  React.useEffect(() => {
    tabData.forEach((tab) => {
      const { date, sliderValue, duration } = tab;
      generateTimeSlots(date, sliderValue, duration);
    });
  }, [tabData]);

  const generateTimeSlots = (dateString, sliderValue, duration) => {
    const [start, end] = sliderValue;
    const slots = [];
    let startTime = start;

    while (startTime <= end) {
      const hours = Math.floor(startTime);
      const minutes = (startTime - hours) * 60;
      slots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
      startTime += duration / 60;
    }

    setTabData((prev) =>
      prev.map((tab) =>
        tab.date === dateString ? { ...tab, timeSlots: slots } : tab
      )
    );
  };

  const handleRemoveTab = (dateString) => {
    setTabData((prev) => prev.filter((tab) => tab.date !== dateString));
    setHighlightedDays((prev) => prev.filter((date) => dayjs(date).format('MM/DD/YY') !== dateString));
  };

  const handleSubmit = () => {
    // Collect the data to send to the backend
    const dataToSend = tabData.map((tab) => ({
      date: tab.date,
      sliderValue: tab.sliderValue,
      duration: tab.duration,
      holdTime: tab.holdTime,
    }));

    console.log(dataToSend);

    // Send dataToSend to the backend using your preferred method (e.g., fetch, axios)
  };

  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: 'calc(12px + var(--Header-height))',
          sm: 'calc(12px + var(--Header-height))',
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 1,
        overflow: 'auto',
        maxHeight: 'calc(100vh - 10px)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" color="neutral" href="#some-link" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link underline="hover" color="neutral" href="#some-link" fontSize={12} fontWeight={500}>
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Schedule Interview
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="h2" component="h1">
          Schedule Interview
        </Typography>

        <Button component={RouterLink} to="/jobprovider/home" color="primary" startDecorator={<ScheduleIcon />} size="sm" onClick={handleSubmit}>
          Finish Schedule
        </Button>
      </Box>

      <Divider />

      <Card>
        <CardContent>
          <Box
            sx={{
              display: { xs: 'block', sm: 'grid' },
              gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            

            { tabData.length === 0 ? (
                
                
      
                <Card  variant="outlined" sx={{ boxShadow: 'none' }}>
                <AspectRatio ratio="21/9" objectFit="contain">
                  <img src="/calendar.png" alt="Calendar" />
                </AspectRatio>
                <CardContent>
                  <Typography color="primary" level="title-lg" component="div">
                    Final Step
                  </Typography>
                  <Typography  level="body-md" sx={{ mt: 1 , textAlign:'justify'}}>
                    Please select the date and time for your interview. Once you have made your selection, click the "Finish Schedule" button to confirm your time slots and interview.
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
    


            ):
            
            (

            <Box>
              <Typography sx={{ p: 2 }} justifyContent="center" startDecorator={<AccessTimeIcon />} level="title-lg">
                Select Time
              </Typography>

              <Tabs
                aria-label="Vertical tabs"
            
                variant="outlined"
                sx={{
                  borderRadius: 8,
                  width: '100%',
                  transition: 'height 0.9s ease-in-out, width 0.9s ease-in-out'
                  
                }}
               
              >
                <TabList sx={{
                        overflow: 'auto',
                        scrollSnapType: 'x mandatory',
                        '&::-webkit-scrollbar': { display: 'none' },
                        }}

                        
                >
                  {tabData
                    .sort((a, b) => {
                        const dateA = dayjs(a.date, 'MM/DD/YY');
                        const dateB = dayjs(b.date, 'MM/DD/YY');
                        return dateA.isAfter(dateB) ? 1 : -1; // Sorts in ascending order
                    })
                    .map((tab, index) => (
                        
                        
                        <Tab key={index} sx={{ flex: 'none', scrollSnapAlign: 'start' }}>
                            
                            {tab.tabTitle}

                        <ListItemDecorator>
                            <CancelIcon color='danger' onClick={() => handleRemoveTab(tab.date)} sx={{ cursor: 'pointer' }}/>
                        </ListItemDecorator>

                        </Tab>
                        
                    ))}
                </TabList>

                {tabData.map((tab, index) => (
                  <TabPanel key={index} value={index} sx={{ overflow: 'auto' }}>
                    <Box display="flex" gap={2} m={1}>
                      <Typography level="title-md">
                        <b>1. </b>Choose Time
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        marginBottom: '1rem',
                        p: 1,
                      }}
                    >
                      <TimeSlider value={tab.sliderValue} onChange={(e, value) => handleSliderChange(tab.date, value)} />
                    </Box>

                    <Box display="flex" gap={2} m={1}>
                      <Typography level="title-md">
                        <b>2. </b>Select Duration
                      </Typography>
                    </Box>

                    <Box sx={{ p: 1, mb: 1 }}>
                      <TimeDuration value={tab.duration} onChange={(value) => handleDurationChange(tab.date, value)} />
                    </Box>

                    <Box display="flex" gap={2} m={1}>
                      <Typography level="title-md">
                        <b>3. </b>Select Time Slots
                      </Typography>
                    </Box>

                    <Box sx={{ p: 1, mb: 1 }}>
                      <TimeSlots data={tab.timeSlots} valueTimeSlots={tab.holdTime} 
                      
                      onChange={(event, item) => {
                        const updatedHoldTime = event.target.checked
                          ? [...tab.holdTime, item]
                          : tab.holdTime.filter((time) => time !== item);
                        handleTimeSlotChange(tab.date, updatedHoldTime);
                      }}
                       />
                    </Box>

                    <Divider />

                    
                  </TabPanel>
                ))}
              </Tabs>
            </Box>
            )}


            <Box>
              <Typography
                sx={{ p: 2, textAlign: 'center' }}
                justifyContent="center"
                startDecorator={<DateRangeIcon />}
                level="title-lg"
              >
                Select Interview Dates
              </Typography>

              <DateCalender highlightedDays={highlightedDays} setHighlightedDays={setHighlightedDays} onChange={handleDateChange} />
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default InterviewSchedule;
