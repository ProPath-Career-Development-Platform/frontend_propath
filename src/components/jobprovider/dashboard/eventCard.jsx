import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import Star from '@mui/icons-material/Star';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Box from '@mui/joy/Box';
import EventIcon from '@mui/icons-material/Event';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/joy/Button';
import {Link as RouterLink} from 'react-router-dom';
import MovingIcon from '@mui/icons-material/Moving';
import Skeleton from '@mui/joy/Skeleton';
import axios from 'axios';
export default function EventCard(props) {
  const { eventId,status,eventName,eventImage,eventLocation,eventParticipants,eventDate,keywords , skeleton} = props;

  const [isLoaded, setIsLoaded] = React.useState(true);
  const [userData, setUserData] = React.useState([]);

  const token = localStorage.getItem('token');

  React.useEffect(() => {

    //axios get request to fetch the event details ,token
    axios.get(`http://localhost:8080/jobprovider/event/register/${eventId}`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setUserData(response.data);
    }
    ).catch((error) => {
      console.log(error);
    }
    )
    

  },[]);

    

  
  return (

    <>

    {
      skeleton ? (

        
        <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio
          ratio="2"
          flex
          sx={{
            minWidth: { sm: 200, md: 300 },
            '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            <Skeleton variant="text" width={60} />
            <Typography level="title-lg" sx={{ mb: 1, ml: 0.5 }}>
              <Skeleton variant="text" width={120} />
            </Typography>
          </Box>
          <Skeleton variant="circular" width={40} height={40} />
        </Stack>
        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25, mx: 0.25, mb: 1 }}
        >
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={60} />
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', ml: 0.5 }}>
          <AvatarGroup size="md">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={40} height={40} />
          </AvatarGroup>
          <Button variant="outlined" size="sm" disabled>
            <Skeleton variant="text" width={60} />
          </Button>
        </Box>
      </CardContent>
    </Card>


      
      
      ) :

      (


        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
           
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            '&:hover': {
              boxShadow: 'lg',
              borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
            },
          }}
        >
          <CardOverflow
            sx={{
              mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
              mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
              '--AspectRatio-radius': {
                xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
                sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
              },
            }}
          >
            <AspectRatio
              ratio="2"
              flex
              sx={{
                minWidth: { sm: 200, md: 300 },
                '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
              }}

              objectFit="cover"
            >
              <Skeleton loading={isLoaded} onLoad={()=> setIsLoaded(false)} variant="overlay">
              <img alt="" src={eventImage} />
              </Skeleton>
              <Stack
                alignItems="center"
                direction="row"
                sx={{ position: 'absolute', top: 0, width: '100%', p: 1 }}
                >
                {status == "active" ? (

                  <>
                  <Chip
                  variant="soft"
                  color="success"
                    startDecorator={<MovingIcon />}
                    size="md"
                    >
                    Active
                  </Chip>

                  <IconButton
                  component= {RouterLink}
                  to={`/jobprovider/meet-up/updateEvent/${eventId}`}
                  variant="outlined"
                  size="sm"
                  color="neutral"

                  sx={{
                    display: { xs: 'flex', sm: 'none' },
                    ml: 'auto',
                    borderRadius: '50%',
                    zIndex: '20',
                    bgcolor: 'background.body',
                    
                  }}
                  >
                  <ModeEditIcon   />

                  </IconButton>

                  </>
                ):
                (

                  <>
                  <Chip
                  variant="soft"
                  color="warning"
                  startDecorator={<DoneAllIcon />}
                  size="md"
                  >
                    Completed
                  </Chip>

                  

                  </>
    
                )}
                
              </Stack>
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              
            >
              <div>
    
                <Box sx={{ display: 'flex', gap: 1 ,mb:1}}>
            
          {  keywords.map((keyword, index) => (
              <Chip color="primary" size="sm" variant='soft'> {keyword} </Chip>
            ))}
    
          </Box>
          
          
                
                <Typography level="title-lg" sx={{mb:1,ml:0.5}}>
                  
                    {eventName}
                
                </Typography>
              </div>
              {
                status == "active" ? (

                  <IconButton
                  component= {RouterLink}
                  to={`/jobprovider/meet-up/updateEvent/${eventId}`}
                    variant="outlined"
                    size="sm"
                    color="neutral"
                    
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      borderRadius: '50%',
                      bgcolor: 'background.body',
                      
                    }}
                  >
                    <ModeEditIcon />
                  </IconButton>
                ) : null

              }
             
            </Stack>
            <Stack
              spacing="0.25rem 1rem"
              direction="row"
              useFlexGap
              flexWrap="wrap"
              sx={{ my: 0.25 ,mx:0.25,mb:1}}
            >
              <Typography level="body-xs" startDecorator={<FmdGoodRoundedIcon />}>
                {eventLocation}
              </Typography>
              <Typography level="body-xs" startDecorator={<EventIcon />}>
                {eventDate}
              </Typography>
              <Typography level="body-xs" startDecorator={<PeopleIcon />}>
               {eventParticipants}
              </Typography>
            </Stack>
            <Box  sx={{display:'flex' , justifyContent:'space-between',ml:0.5 }}>
    
    
    
            <AvatarGroup size='md'>

            {userData.length > 5 ? (
                  <>
                    {userData.slice(0, 4).map((user) => (
                      <Avatar key={user.userId} alt={user.userName} src={user.profilePicture} />
                    ))}
                    <Avatar>+{userData.length - 4}</Avatar>
                  </>
                ) : (
                  userData.map((user) => (
                    <Avatar key={user.userId} alt={user.userName} src={user.profilePicture} />
                  ))
                )}

              
              
            </AvatarGroup>
            
            <Button 
                    startDecorator={<VisibilityIcon />} 
                    size="sm"
                    component= {RouterLink}
                    to={`/jobprovider/meet-up/preview-event/${eventId}`}
                    > 
                    Preview
            </Button>
    
             
            </Box>
          </CardContent>
        </Card>
      )
    }
    </>

  );
}
