import * as React from 'react';

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

import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Switch from '@mui/joy/Switch';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Slider from '@mui/joy/Slider';

import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';




function InterviewSchedule() {

    const [sliderValue, setSliderValue] = React.useState([8, 12]);
    const [duration, setDuration] = React.useState(15);
    const [timeSlots, setTimeSlots] = React.useState([]);

    const [holdTime, setHoldTime] = React.useState([]);

    const [highlightedDays, setHighlightedDays] = React.useState([]);

    const [tabData, setTabData] = React.useState([]);

    const handleDateChange = (newDate) => {
        const dateString = newDate.format('MM/DD');
        if (!tabData.some((tab) => tab.date === dateString)) {
          setTabData((prev) => [
            ...prev,
            {
              date: dateString,
              sliderValue: [8, 12],
              duration: 15,
              holdTime: [],
              timeSlots: [],
            },
          ]);
        }
      };
  
    const generateTimeSlots = (sliderValue, duration) => {
      const [start, end] = sliderValue;
      const slots = [];
      let startTime = start;
  
      while (startTime <= end) {
        const hours = Math.floor(startTime);
        const minutes = (startTime - hours) * 60;
        slots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
        startTime += duration / 60;
      }
  
      setTimeSlots(slots);
      setHoldTime([]);
    };
  
    React.useEffect(() => {
      generateTimeSlots(sliderValue, duration);
    }, [sliderValue, duration]);
  
    const handleSliderChange = (event, newValue) => {
      setSliderValue(newValue);
    };
  
    const handleDurationChange = (newDuration) => {
      setDuration(parseInt(newDuration, 10));
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
                    <Link
                        underline="none"
                        color="neutral"
                        href="#some-link"
                        aria-label="Home"
                    >
                        <HomeRoundedIcon />
                    </Link>
                    <Link
                        underline="hover"
                        color="neutral"
                        href="#some-link"
                        fontSize={12}
                        fontWeight={500}
                    >
                        Dashboard
                    </Link>
                    <Typography color="primary" fontWeight={500} fontSize={12}>
                        Settings
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

                <Button
                    color="primary"
                    startDecorator={<ScheduleIcon />}
                    size="sm"
                >
                   Finish Schedule
                </Button>
            </Box>

            <Divider />

         
            
                <Card>

                    <CardContent>

                 <Box

                    sx={{
                        
                        display: { xs: 'block', sm: 'grid',},
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem',  
                        }}
                 >

            
                    <Box>

                        <Typography sx={{p:2, textAlign:'center'}} justifyContent="center" startDecorator={<DateRangeIcon/>} level='title-lg'>
                            Select Interview Dates
                        </Typography>

                        <DateCalender highlightedDays={highlightedDays} setHighlightedDays={setHighlightedDays} />

                    </Box>

                    <Box>
                            
                        <Typography sx={{p:2}} justifyContent="center" startDecorator={<AccessTimeIcon/>} level='title-lg'>
                            Select Time 
                        </Typography>
                       

                        <Tabs
                            aria-label="Vertical tabs"
                            orientation='vertical'
                             variant="outlined"
                         
                             sx={{
                                borderRadius: 8,
                             }}
                             defaultValue={0}
                            >
                            <TabList>
                                <Tab>07/25</Tab>
                                
                                
                                
                            </TabList>
                            
                            <TabPanel  value={0} sx={{overflow:'auto'}}>

                               
                                        <Box display="flex" gap={2} m={1}>

                                        <Typography level='title-md'><b>1. </b>Choose Time</Typography>

                                        </Box>

                                        <Box
                                            sx={{
                                                marginBottom: '1rem',  
                                                p:1
                                            }}
                                        >

                                           
<TimeSlider value={sliderValue} onChange={handleSliderChange} />
                                            
                                            

                                            

                                        </Box>

                                        <Box display="flex" gap={2} m={1}>

                                        <Typography level='title-md'><b>2. </b>Select Duration</Typography>

                                        </Box>
                                        
                                        <Box sx={{p:1 , mb:1}}>

                                        
                                        <TimeDuration value={duration} onChange={handleDurationChange} />

                                        </Box>

                                        <Box display="flex" gap={2} m={1}>

                                        <Typography level='title-md'><b>3. </b>Select Time Slots</Typography>

                                        </Box>

                                        <Box sx={{p:1 , mb:1}}>

                                        
                                                

                                                <TimeSlots data={timeSlots} valueTimeSlots={holdTime} setValueTimeSlots={setHoldTime} />
                                        

                                        </Box>

        
                                        
                                        
                                <Divider />

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    gap: 1,
                                    mt: 2,
                                }}
                                >

                                <Button  size="sm" variant="outlined" color="neutral">
                                                Cancel
                                            </Button>
                                            <Button type="submit" size="sm" variant="solid">
                                                Save
                                            </Button>
                                </Box>

                                <Box >

                              </Box>

                            </TabPanel>
                            </Tabs>

                    </Box>
                    

                </Box>

                </CardContent>

            </Card>

        
            

            
        </Box>
    );
}

export default InterviewSchedule;
