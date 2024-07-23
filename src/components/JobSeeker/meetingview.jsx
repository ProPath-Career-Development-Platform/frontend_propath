import * as React from 'react';
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

export default function Meetingview() {
    const time =["7.30am","8.30am","9.30am","10.30am","11.30am"]
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
      <Button>{<KeyboardArrowLeft />}</Button>
      <Button>{<KeyboardArrowRight />}</Button>
      
        </ButtonGroup>
        </Box>
       {/* <Card
      sx={{
        boxShadow: 3,
        width: 80,
        height: 130,
        maxWidth: '100%',
        // to make the demo resizeable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
    
      <div>
        <Typography sx={{display:'flex',justifyContent:'center'}}level="title-lg">
          Mon
        </Typography>
      </div>
      <CardContent>
        <Typography sx={{display:'flex',justifyContent:'center'}} level="title-lg">11</Typography>
      </CardContent>
      <CardActions>
      <Typography sx={{display:'flex',alignItems:'center'}} level="body-sm">7 slots</Typography>
      </CardActions>
    </Card> */}
    <Box sx={{margin:'10px'}}>
    <Button sx={{width:'100px', height:'125px', display:'flex', flexDirection:'column', }} variant="outlined">
    <Typography level="title-lg">Mon</Typography>
        <Typography level="title-lg">11</Typography>
        <Typography level="body-sm">7 slots</Typography>
    </Button>
    </Box>
    <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'10px',marginLeft:'10px' }}>
    <Select
      varient="plain"
      placeholder="Select city"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 240,
        color:'var(--joy-palette-primary-600)',
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="dog">colombo</Option>
      <Option value="cat">Gampaha</Option>
      <Option value="fish">Mathara</Option>
      <Option value="bird">Galle</Option>
    </Select>
    <Typography sx={{display:'flex',justifyContent:'flex-end'}} level="title-md"><AccessTimeIcon/>30 min meeting</Typography>
    </Box>
    <Box sx={{display:'flex'}}>
    {time.map((item)=>(
        <Button sx={{width:'150px',marginLeft:'10px'}} variant="outlined">{item}</Button>
    ))}
    {/* <Button sx={{width:'150px',marginLeft:'10px'}} variant="outlined">8.30am</Button>
    <Button sx={{width:'150px',marginLeft:'10px'}} variant="outlined">9.30am</Button>
    <Button sx={{width:'150px',marginLeft:'10px'}} variant="outlined">10.30am</Button>
    <Button sx={{width:'150px',marginLeft:'10px'}} variant="outlined">11.30am</Button> */}
    </Box>
        </CardContent>


     
    </Card>
  );
}
