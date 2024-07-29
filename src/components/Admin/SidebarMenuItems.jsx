import React,{useState} from 'react' 
import { useLocation } from 'react-router-dom'

import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import LinearProgress from '@mui/joy/LinearProgress';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Avatar from '@mui/joy/Avatar';


import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import Chip from '@mui/joy/Chip';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WorkIcon from '@mui/icons-material/Work';
import PaymentIcon from '@mui/icons-material/Payment';
import GroupsIcon from '@mui/icons-material/Groups';

import Typography from '@mui/joy/Typography';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';



function Toggler({
    defaultExpanded = false,
    renderToggle,
    children,
  }) {
    const [open, setOpen] = useState(defaultExpanded);
    return (
      <>
        {renderToggle({ open, setOpen })}
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          }}
        >
          {children}
        </Box>
      </>
    );
  }
 
function SidebarMenuItems() {
  const location = useLocation();
  const [stackState, setStackState] = useState(false);

  useEffect(() => {
    const savedState = sessionStorage.getItem('planCardState');
    if (savedState === null) {
      setStackState(true);
    } else {
      const parsedState = JSON.parse(savedState);
      if (parsedState === false) {
        setStackState(false);
      } else if (parsedState === true) {
        setStackState(true);
      }
    }
  }, []);
  

   // Save state to session storage when it changes
   useEffect(() => {
    sessionStorage.setItem('planCardState', JSON.stringify(stackState));
  }, [stackState]);

  function handleStack() {
    console.log('Stack clicked');
    if (stackState){
      setStackState(false);
    }else{
      setStackState(true);
    }
    
  }

  
  return (
    <>

<Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >

      {/* ================ List here ========== */}
      <List
        size="sm"
        sx={{
          gap: 1,
          '--List-nestedInsetStart': '30px',
          '--ListItem-radius': (theme) => theme.vars.radius.sm,
        }}
      >
        <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/home/"
            selected={location.pathname === "/admin/home/"}
          >
            <HomeRoundedIcon />
            <ListItemContent>
              <Typography level="title-sm">Dashboard</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/RegisterdCompanies/"
            selected={location.pathname === "/admin/RegisterdCompanies/"}
          >
            <DashboardRoundedIcon />
            <ListItemContent>
              <Typography level="title-sm">companies</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>


        <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/RegisterdUsers/"
            selected={location.pathname === "/admin/RegisterdUsers/"}
          >
            <WorkIcon />
            <ListItemContent>
              <Typography level="title-sm">Users</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/Postedjobs/"
            selected={location.pathname === "/admin/Postedjobs/"}
          >
            <AddCircleOutlineIcon />
            <ListItemContent>
              <Typography level="title-sm">Jobs</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        

        <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/Events/"
            selected={location.pathname === "/admin/Events/"}
          >
            <PaymentIcon />
            <ListItemContent>
              <Typography level="title-sm">Events</Typography>  
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/PDC_Courses/"
            selected={location.pathname === "/admin/PDC_Courses/"}
          >
            <PaymentIcon />
            <ListItemContent>
              <Typography level="title-sm">PDC Courses</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        {/* <ListItem>
          <ListItemButton
            component={RouterLink}
            to="/admin/Interviews/"
            selected={location.pathname === "/admin/Interviews/"}
          >
            <GroupsIcon />
            <ListItemContent>
              <Typography level="title-sm">Interviews</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem> */}
          

        
        </List>

        <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2,
          }}
        >
       
       {/*   <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>

        */}
          
        </List>


        {/* card logic here */}
        { stackState && 
        
        <>

        <Card
          invertedColors
          variant="soft"
          color="warning"
          size="sm"
          sx={{ boxShadow: 'none' }}
          
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" >
            <Typography level="title-sm">Using Free Plan</Typography>
            <IconButton size="sm" onClick={handleStack}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Typography level="body-xs">
            Need more job posts?<br></br>Upgrade now for additional job postings!
          </Typography>
          
          
          <Button size="sm" variant="solid">
            Upgrade plan
          </Button>
        </Card>

        </>}


      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Siriwat K.</Typography>
          <Typography level="body-xs">siriwatk@test.com</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral">
          <LogoutRoundedIcon />
        </IconButton>
      </Box>

    
    </>

  )
}

export default SidebarMenuItems