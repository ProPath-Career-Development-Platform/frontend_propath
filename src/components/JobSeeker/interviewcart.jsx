import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
// import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
// import CardActions from '@mui/joy/CardActions';
// import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AccessTime } from '@mui/icons-material';
import Table from '@mui/joy/Table';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Modal from '@mui/joy/Modal';


export default function Interviewcart() {
  const [open,setOpen] = React.useState(true)
  const [position, setPosition] = React.useState(50);
  return (
    <Modal  open={open} onClose={()=> (setOpen(false))}sx={{display:'flex' , justifyContent: 'center' , alignItems: 'center'}}>
    <Card
      variant="outlined"
      sx={{
        width: 520,
        height: 'auto',
        // to make the card resizable
        overflow: 'auto',
        resize: 'horizontal',
        backgroundColor: 'rgb(245 245 245)',
      }}
    >
    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
          <Avatar src="/static/images/avatar/2.jpg" />
          <Avatar src="/static/images/avatar/3.jpg" />
          <Avatar src="/static/images/avatar/4.jpg" />
          <Avatar>+4K</Avatar>
        </AvatarGroup> */}
      </Box>
      <CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} >

        <CheckCircleOutlineIcon sx={{color:'green', fontSize:'50px',}}/>
        </Box>
        <Typography level="title-lg" sx={{ textAlign: 'center' }}>Thank you! your meeting is confirmed.</Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItem: 'center'}}>
      <Chip sx={{border:'#3f067a solid 1px', backgroundColor:'rgb(226 232 240)' , margin:'auto', color:'#3f067a', paddingLeft:0}} variant="soft">
      <Chip sx={{backgroundColor:'rgb(134 239 172)', margin:'2px'}} variant="soft" > 
        Email sent
      </Chip>
      
      <Chip sx={{ backgroundColor:'rgb(226 232 240)'}} variant="soft">
      check your inbox with an email with all details!
       </Chip>
      </Chip>
    </Box>
        <Typography level="body-sm">
        <Card
      variant="outlined"
      sx={{
        width: 'auto',
        // to make the card resizable
        overflow: 'auto',
        margin: '10px',
        resize: 'horizontal',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
      </Box>
      <CardContent>
        <Typography level="body-xs">You are meeting with </Typography>
        <Typography sx={{fontSize:'28px' , display:'flex', justifyContent:'space-between'}} level="title-lg">David Bromberg
        <Avatar src="/static/images/avatar/1.jpg" size="lg"/>
        </Typography>
        <hr/>
        {/* <Typography level="body-sm">
            <List
                sx={{
                    maxWidth: 'auto',
                }}
                > */}
                    <Table aria-label="basic table">
                    <tbody>
        <tr sx = {{display:'flex', justifyContent:'spacebetween'}}>
          <td><AccessTimeIcon/>Time</td>
          
          <td>Thursday, Sep 14th, 15:00 - 15:30 CEST</td>
        </tr>
        <tr>
          <td><PeopleAltIcon/>Guests</td>
          <td>mark.twain@example.com</td>
        </tr>
        <tr>
          <td><FormatAlignLeftIcon/>Details</td>
          <td>we've sent and email with your booking details</td>
        </tr>
        </tbody>




                    </Table>
                    {/* <ListItem>
                    <ListItemDecorator />
                        <AccessTimeIcon />
                        <Typography level="title-md">Time</Typography>
                        Thursday, Sep 14th, 15:00 - 15:30 CEST
                        <Divider sx={{ '--Divider-childPosition': `${position}%` }}/>
                    </ListItem>
                    <hr/>
                    <ListItem>
                        <ListItemButton>
                        <ListItemDecorator>
                            <Apps />
                        </ListItemDecorator>
                        <Typography level="title-md">Guests</Typography>
                        mark.twain@example.com
                        </ListItemButton>
                    </ListItem>
                    <hr/>
                    <ListItem>
                        <ListItemButton>
                        <ListItemDecorator />
                        <Typography level="title-md">Details</Typography>
                          we've sent and email with your booking details
                        </ListItemButton>
                    </ListItem>
                </List> */}
        {/* </Typography> */}
      </CardContent>
      
    </Card>
        </Typography>
      </CardContent>
    
    </Card>
    </Modal>
  );
}
