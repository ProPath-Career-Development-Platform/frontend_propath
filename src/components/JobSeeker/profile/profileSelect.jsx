import * as React from 'react';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import seba from '/seba.jpg'
import { Avatar } from '@mui/joy';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import OpenInNew from '@mui/icons-material/OpenInNew';
export default function ProfileSelect() {
  const details = [
                    { label: 'Name:', value: 'Santhush Fernando' },
                    { label: 'Role:', value: 'Job Seeker' },
                    { label: 'Email:', value: 'Email Address' },
                    { label: 'Contact:', value: '+94 762777952' },
                    { label: 'Status:', value: 'Active' },
                  ]
  const [type, setType] = React.useState(1);
  return (
    <Stack sx={{padding: '10px'}}>
      <ToggleButtonGroup
        value={type}
        onChange={(event, newValue) => setType(newValue || undefined)}
        sx={{display:'flex' , justifyContent : 'Center'}}
      >
        <Button value="1" sx={{borderBottom: type==1 ? '2px solid blue' : 'auto'}}>Profile Details</Button>
        <Button value="2" sx={{borderBottom: type==2 ? '2px solid blue' : 'auto'}}>Edit Profile</Button>
        <Button value="3" sx={{borderBottom: type==3 ? '2px solid blue' : 'auto'}}>Notifications</Button>
        <Button value="4" sx={{borderBottom: type==4 ? '2px solid blue' : 'auto'}}>Settings</Button>
      </ToggleButtonGroup>
      
      {type == 1 && (
        <Box sx={{display:'flex' , gap: 3 , mt: '40px'}}> 
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3, backgroundColor: '#EDF3FC', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '400px', margin: '0 auto' }}>
          <Avatar src={seba} sx={{ width: '150px', height: '150px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
          <Box sx={{ mt: '20px', mb: '20px', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Santhush Fernando</Typography>
          <Typography variant="body1" sx={{  fontSize: '13px' }}>SFernando@gmail.com</Typography>
          <Typography variant="body1" sx={{  fontSize: '13px'  }}>Sri Lanka</Typography>
        </Box>
        </Box>
          <Box sx={{width: '500px' }}>
          {details.map((item, index)=> (
              
              <Box sx={{display: 'flex' , flexDirection: 'row' , borderRadius: '8px' , backgroundColor: (index%2) == 0 ? '#EDF3FC' : 'white', justifyContent: 'space-around'}}>
              <Box sx={{}}>
              
              <Typography sx={{lineHeight: '50px'}}>{item.label} </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
              <Typography sx={{lineHeight: '50px'}}>{item.value} </Typography>
              </Box>
            
              </Box>

          ))}
           <Button component="a" href="#as-link" startDecorator={<OpenInNew /> } sx = {{marginTop: '30px'}}>
             Download CV
           </Button>
          <Box>

          </Box>
          </Box>
          
           
            
         
        </Box>
        
      )}
      
    </Stack>
  );
}
