import React from 'react'
import Box from '@mui/joy/Box';
import ProfileDropdown from '../../components/JobSeeker/ProfileDropDown';
import Alert from '../../components/JobSeeker/alert';
import JSSearch from '../../components/JobSeeker/search';
import logo from '/logo.png'
import JSDropDown from '../../components/JobSeeker/JSDropDown';
import AdvancedFilter from '../../components/JobSeeker/advancedfilter/advancedfilter';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';



const Event = () => {
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
      maxHeight: 'calc(100vh - 10px)',
      overflow:'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}
  >
   
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
                <Box sx={{width : 130}}>
                <img src={logo} />
                </Box>

                  
                
              
                <Box sx={{ display: 'flex' }}>
                    <JSSearch/>
                    <Alert />
                    <ProfileDropdown />
                   


                </Box>
              
              
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
                      
                        
                        <Box sx={{ display: 'flex', gap : 2  }}>
                           <JSDropDown name = {"Job Type "} sizes = {['Fulltime', 'Contract' , 'Internship' , 'PartTime' , 'Casual'    ]} proptype = '1' />
                           <JSDropDown name = {"Modality "} sizes = {['Inoffice', 'Remote'  ]} proptype = '1'/>
                           <JSDropDown name = {"Job Type "} sizes = {['Srilanka', 'Bangladesh' , 'Internship' , 'PartTime' , 'Casual'    ]} proptype = '1'/>
                           <JSDropDown name = {"Salary "} sizes = {['Fulltime', 'Contract' , 'Internship' , 'PartTime' , 'Casual'    ]} proptype = '0'/> 
                           <AdvancedFilter/> 
                        </Box>

                        </Box>
                        <Box
              sx ={{
                display:'flex',
                flexDirection:'column',
                mt:{sm:2},
                gap:{sm:3}
              }}
            >

              <Box>
              <Typography  level="h3" component="h1">
                  Upcoming Events
                </Typography>
              </Box>
              <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
       
       
      }}
    >
     
      <Card
        orientation="horizontal"
        sx={{
          width: '90%',
          flexWrap: 'wrap',
          display:'flex',
          flexDirection:{sm:'row',xs:'column'},
          overflow: 'auto',
          
        }}
      >
        <AspectRatio objectFit="object-fit" sx={{width:400}}>
          <img
            src="/acm_meetup.jpg"
            // srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            
          />
        </AspectRatio>
        <CardContent>
          <Box
            sx={{
              alignSelf:'center'
            }}
          >
          <Typography  level="h4" component="h1">
                  ACM Monthly Meetup
                </Typography>
          </Box>
          <Box
            sx={{
              ml:{sm:3},
            }}
          >
          <List sx={{marginTop:"20px"}}size="md">
           <ListItem>
            <ListItemDecorator>
            <CalendarMonthOutlinedIcon/>  
            </ListItemDecorator>
            Event Date - 21st July 2024
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <PinDropOutlinedIcon/>
            </ListItemDecorator>
            Location - UCSC Premisus
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <GroupsOutlinedIcon/>
            </ListItemDecorator>
             Current participants - 21 Attending
          </ListItem>
          
        </List>
          </Box>
          <Box
          sx={{
            // 
            ml:{sm:5}
          }}
          > 
          </Box>
            
        </CardContent>
      </Card>
      
    </Box>
    </Box>
 </Box>
  )
}

export default Event