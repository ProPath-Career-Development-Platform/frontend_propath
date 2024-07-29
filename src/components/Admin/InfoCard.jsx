import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import CardOverflow from '@mui/joy/CardOverflow';
import Box from '@mui/joy/Box';
import VerifiedIcon from '@mui/icons-material/Verified';

const InfoCard = () => {
  return (
   

    <Card
    sx={{
      textAlign: 'center',
      alignItems: 'center',
      width: 400,
      '--icon-size': '100px',
    }}
  >
    {/* Cover Image */}
    <CardOverflow>
      <AspectRatio ratio="21/6">
        <img
          src="/companyCover.jpg"
          alt="Cover Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </CardOverflow>

    {/* Profile Image */}
    <AspectRatio
      ratio="1"
      sx={{
        m: 'auto',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        width: 'var(--icon-size)',
        boxShadow: 'sm',
        bgcolor: 'background.surface',
        position: 'relative',
        border:'2px solid #5F35AE'
    }}
    >
      <Avatar src="/companylogo.png" sx={{ width: '100%', height: '100%'}} />
    </AspectRatio>

    <Typography level="h4" sx={{mt:-7}}>
      99x <VerifiedIcon color='primary' sx={{ fontSize: '20px',alignSelf:'center' }}/>
    </Typography>
    <Typography level="h6" sx={{mt:-1}}>
    Information Technology Company
    </Typography>
    <Box>

    </Box>
      
  </Card>
  )
}

export default InfoCard