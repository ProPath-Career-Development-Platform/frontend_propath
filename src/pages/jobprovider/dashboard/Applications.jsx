import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Divider from '@mui/joy/Divider';


import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Done from '@mui/icons-material/Done';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';



const Applications = () => {
  
  const [value, setValue] = React.useState([]);


  const cardData = [
    { id: 1, name: 'Santhush Fernando',title: 'NYC Coders', description: '2024/06/10', imgSrc: '../../public/seba.jpg' },
    { id: 2, name: 'Tharindu Prabashwara',title: 'React Developers', description: 'Join our community to learn and share knowledge about React development.', imgSrc: '../../public/seba.jpg' },
    { id: 3, name: 'Sandani Gunawardhana',title: 'Backend Developers', description: 'Discuss and improve your backend development skills with our community.', imgSrc: '../../public/seba.jpg' },
    { id: 4, name: 'Pahasara Fernando',title: 'AI Enthusiasts', description: 'Explore and discuss the latest trends in AI and machine learning.', imgSrc: '../../public/seba.jpg' },
    { id: 5, name: 'Manil Thenuka',title: 'Web Developers', description: 'Share and gain insights on the latest web development practices.', imgSrc: '../../public/seba.jpg' },
    { id: 6, name: 'Thisara Dilshan',title: 'Mobile Developers', description: 'Connect with fellow mobile developers and enhance your skills.', imgSrc: '../../public/seba.jpg' },
  ];


  const CardComponent = ({ title, name,description, imgSrc }) => (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        overflow: 'auto',
        // resize: 'horizontal',
        // marginBottom: 2,
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'space-between',
          alignItems: 'center',
          gap:2,
          padding: 0.6,
          // backgroundColor:'#ebdbfd'
        }}
      >
        <Box>
        <Avatar src={imgSrc} sx={{ width:40, height: 40 }} />
        </Box>
        <Box>
          <Typography level="title-lg">{name}</Typography>
        </Box>
      </Box>
      <Divider />
      
      <CardContent>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">Applied Date : {description}</Typography>
      </CardContent>
      <CardActions>
       
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" backgroundColor="#d6b4fc">
          Download CV
        </Button>
      </CardActions>
    </Card>
  );


  
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
              <Box>
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
                  href="/jobprovider/Dashboard/"
                  fontSize={12}
                  fontWeight={500}
                >
                  Dashboard
                </Link>
                <Link
                  underline="hover"
                  color="neutral"
                  href="/jobprovider/my-jobs/"
                  fontSize={12}
                  fontWeight={500}
                >
                  My Jobs
                </Link>
                <Typography color="neutral" fontWeight={500} fontSize={12}>
                  UI/UX Designer
                </Typography>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                  Applications
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
                Job Applications <Typography fontWeight={400} color="neutral">({100})</Typography>
              </Typography>
             
            </Box>

            <Divider />

            <Box
              sx={{
                display:'flex',
                flexDirection:{ xs: 'column', sm: 'row',m:'row'},
                gap:4 ,
                mt:{xs:2, sm:2}              
              }}
            >
              <Box>
            <Sheet 
            variant="outlined" 
            sx={{ 
               
              p: 2, 
              borderRadius: 'sm' 
              }}>
      <Typography id="rank" level="body-sm" fontWeight="lg" sx={{ mb: 1.5 }}>
        ATS Score
      </Typography>
      <div role="group" aria-labelledby="rank">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '20px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
            '--ListItem-gap': '4px',
          }}
        >
          {[' above 85%', 'between 50% - 85%', 'Below 50%'].map(
            (item, index) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, zIndex: 2, pointerEvents: 'none' }}
                  />
                )}

                <Checkbox
                  size="sm"
                  // disabled={index === 0}
                  disableIcon
                  overlay
                  label={item}
                  checked={value.includes(item)}
                  variant={value.includes(item) ? 'soft' : 'outlined'}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setValue((val) => [...val, item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            ),
          )}
        </List>
      </div>
    </Sheet>
    </Box>
    <Box>
    <Sheet 
            variant="outlined" 
            sx={{ 
               
              p: 2, 
              borderRadius: 'sm' 
              }}>
      <Typography id="rank" level="body-sm" fontWeight="lg" sx={{ mb: 1.5 }}>
        Applied Date
      </Typography>
      <div role="group" aria-labelledby="rank">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '20px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
            '--ListItem-gap': '4px',
          }}
        >
          {['Newest', 'Older'].map(
            (item, index) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, zIndex: 2, pointerEvents: 'none' }}
                  />
                )}

                <Checkbox
                  size="sm"
                  // disabled={index === 0}
                  disableIcon
                  overlay
                  label={item}
                  checked={value.includes(item)}
                  variant={value.includes(item) ? 'soft' : 'outlined'}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setValue((val) => [...val, item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            ),
          )}
        </List>
      </div>
    </Sheet>
    </Box>
    
    
            </Box>
              
            <Box
            sx={{
              pt:3
            }}
            
            >
               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {cardData.map(card => (
              <Box key={card.id} sx={{ width:'100%'}}>
               <CardComponent name={card.name} title={card.title} description={card.description} imgSrc={card.imgSrc} />
               </Box>
                 ))}
              </Box>
            </Box>

            
            
    </Box>
  )
}

export default Applications