import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import ColorSchemeToggle from '../dashboard/ColorSchemeToggle';
import { closeSidebar } from '../../utils/sidebarUtils';
import { getToken } from '../../pages/Auth/Auth';


import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Chip from '@mui/joy/Chip';
import WorkIcon from '@mui/icons-material/Work';
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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

export default function SidebarAdmin() {
    const location = useLocation();
  const [stackState, setStackState] = useState(false);
  const [pendingRequests, setPendingRequests] = useState(0);


  useEffect(() => {
    const token = getToken();
    console.log(token);

    fetch('http://localhost:8080/admin/numberofPendingReq', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response body:', data); 
        setPendingRequests(data);
      })
      .catch(error => {
        console.log('Error fetching companies:', error);
      });
  }, []);


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
    <CssVarsProvider>
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: '16.5rem',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', paddingTop:1 }}>
          
        <IconButton variant="soft" color="primary" size="sm" sx={{backgroundColor:'transparent'}}>
          <Avatar size='sm' src='/logoCroped.png' sx={{ backgroundColor: 'transparent',borderRadius:0, objectFit:'cover', padding:'0 !important'}}>PP</Avatar>          
        </IconButton>
        <Typography level="title-lg" sx={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#814dde' }}>
             ProPath
         </Typography>
        <ColorSchemeToggle sx={{ ml: 'auto' }} />
      </Box>
      <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />

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
                    paddingTop: 3,
                    }}
                >
                    <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/home/"
                        selected={location.pathname === "/admin/home/"}
                    >
                        <DashboardIcon />
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
                        <BusinessIcon />
                        <ListItemContent>
                        <Typography level="title-sm">Registered Companies</Typography>
                        </ListItemContent>
                        <Chip size="sm" color="primary" variant="solid">
                            {pendingRequests}
                        </Chip>
                    </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/RegisterdUsers/"
                        selected={location.pathname === "/admin/RegisterdUsers/"}
                    >
                        <PeopleIcon />
                        <ListItemContent>
                        <Typography level="title-sm">Registered Users</Typography>
                        </ListItemContent>
                    </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/Postedjobs/"
                        selected={location.pathname === "/admin/Jobs/"}
                    >
                        <WorkIcon />
                        <ListItemContent>
                        <Typography level="title-sm">Jobs</Typography>
                        </ListItemContent>
                    </ListItemButton>
                    </ListItem>

                    {/* <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/Postedjobs/"
                        selected={location.pathname === "/admin/Postedjobs/"}
                    >
                        <WorkspacePremiumIcon />
                        <ListItemContent>
                        <Typography level="title-sm">Professional Memberships</Typography>
                        </ListItemContent>
                    </ListItemButton>
                    </ListItem> */}

                    <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/Events/"
                        selected={location.pathname === "/admin/Events/"}
                    >
                        <Diversity3Icon />
                        <ListItemContent>
                        <Typography level="title-sm">Workshops/Meetups</Typography>  
                        </ListItemContent>
                    </ListItemButton>
                    </ListItem>

                    {/* <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/PDC_Courses/"
                        selected={location.pathname === "/admin/PDC_Courses/"}
                    >
                        <SchoolIcon />
                        <ListItemContent>
                        <Typography level="title-sm">CPD Courses</Typography>
                        </ListItemContent>
                    </ListItemButton>
                    </ListItem> */}

                    <ListItem>
                    <ListItemButton
                        component={RouterLink}
                        to="/admin/Financial/"
                        selected={location.pathname === "/admin/financial"}
                    >
                        <PaymentIcon />
                        <ListItemContent>
                        <Typography level="title-sm">Financial</Typography>
                        </ListItemContent>
                    </ListItemButton>
                    </ListItem>
                </List>                
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography level="title-sm">Admin</Typography>
                <Typography level="body-xs">admin@gmail.com</Typography>
              </Box>
              <IconButton size="sm" variant="plain" color="neutral" sx={{'&:hover': {
                bgcolor: '#f5f0ff',
                },
                transition: 'background-color 0.3s', 
                }}>
                <LogoutRoundedIcon/>
              </IconButton>
            </Box>
        </Sheet>
    </CssVarsProvider>
  );
}

