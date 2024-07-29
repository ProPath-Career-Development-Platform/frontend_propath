import React , {useState} from 'react'
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Settings from '@mui/icons-material/Settings';
import Chip from '@mui/joy/Chip';
import Badge from '@mui/joy/Badge';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Select, { selectClasses } from '@mui/joy/Select';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Grid from '@mui/joy/Grid';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';

export default function Meetingview() {
    const time =["7.30am","8.30am","9.30am","10.30am","11.30am"]
    const date =[['Mon','11','7 slots'],['Tue','12','7 slots'],['Wed','13','7 slots'],['Thu','14','7 slots'],['Fri','15','7 slots'],['Sat','16','7 slots'],['Sun','17','7 slots']]
    const [selectedDate, setSelectedDate] = useState(-1); 
    const [selectedTime, setSelectedTime] = useState(-1);
    const [datenum, setDatenum] = useState(0);

  return (
    <Card
      variant="outlined"
      sx={{
        width: '480px',
        margin: '10px',
        height: '650px',
        // to make the card resizable
        overflow: 'auto'
      }}
    >
      
      <CardContent>
      <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} >
        <GroupsSharpIcon sx={{fontSize:'50px', color:'#814DDE'}}/>
        </Box>
        <Typography sx={{marginLeft:'10px'}} level="title-lg">30 minute call with David Bromberg</Typography>
        <Typography sx={{marginLeft:'10px'}} level="body-sm">
        Let's schedule a quick call and jamp on the potential between
        Lantern and your company. I will show you now we can accelerate your sales growth!
        </Typography>
        <hr/>
        <Box sx={{display:'flex', justifyContent:'space-between', margin:"10px"}}>
        <Select
        sx={{
            width: '200px',
            }}
        defaultValue="September 2023"
      indicator={<KeyboardArrowDown />}
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
          
        }}
      >
        <Option value="September 2023">September 2023</Option>
        <Option value="October 2023">October 2023</Option>
        </Select>
        <ButtonGroup aria-label="outlined primary button group">
      <Button onClick={()=>(datenum!=0 && (setDatenum(datenum-4)))}>{<KeyboardArrowLeft />}</Button>
      <Button onClick={()=>(datenum!=date.length-3 && (setDatenum(datenum+4)))}>{<KeyboardArrowRight />}</Button>
      
        </ButtonGroup>
        </Box>
    <Box 
                          sx={{ 
                            marginLeft:'10px',
                            marginBottom:'20px',
                            display: 'grid', 
                            gridTemplateColumns: {
                              xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                              sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
                              md: 'repeat(4, 1fr)', // 3 columns for medium and larger screens (desktop)
                            }, 
                           
                            gap: 1, 
                            
                          }}
                        >
                             {date.slice(datenum,datenum+4).map((item,index)=>(
                                <Button onClick={()=>{setSelectedDate(index) ,setSelectedTime(-1)}} sx={{width:'100px', height:'125px', display:'flex', flexDirection:'column', backgroundColor:index==selectedDate?'Var(--joy-palette-primary-100)':'#fff' }} variant="outlined">
                                <Typography level="title-lg">{item[0]}</Typography>
                                    <Typography level="title-lg">{item[1]}</Typography>
                                    <Typography level="body-sm">{item[2]}</Typography>
                                </Button>
    ))}
                        </Box>
                        
    
    {selectedDate!=-1 && (
        <Box>
        <Box sx={{display:'flex', justifyContent:'center', marginBottom:'10px',marginLeft:'10px' }}>
    
        <Chip sx={{backgroundColor:'linear-gradient(to left, #E1CBFF , #fff, 200px)',marginBottom:"10px"}} >
    
    <Typography sx={{display:'flex',justifyContent:'center', color:'#814DDE', width:'400px',margin:'5px'}} level="title-md"><AccessTimeIcon sx={{color:'#814DDE',marginRight:'5px'}}/>Time Slots</Typography>
    </Chip>
        </Box>
    <Box 
                          sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: {
                              xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                              sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
                              md: 'repeat(3, 1fr)', // 3 columns for medium and larger screens (desktop)
                            }, 
                           
                            gap: 1, 
                            
                          }}
                        >
                             {time.map((item, index)=>(
        <Button onClick={()=>{setSelectedTime(index)}} sx={{width:'130px',marginLeft:'10px',backgroundColor:index==selectedTime?'Var(--joy-palette-primary-100)':'#fff'}} variant="outlined">{item}</Button>
    ))}
                        </Box>
                        </Box>
    )}
        </CardContent>


     
    </Card>
  );
}
