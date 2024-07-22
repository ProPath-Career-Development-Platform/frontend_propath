import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import CardOverflow from '@mui/joy/CardOverflow';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';


export default function GeneralCard() {
  return (
    <Card>
        <CardContent orientation='horizontal' sx={{display:'flex',alignItems:'center'}}>
            <Avatar alt="Remy Sharp" src="/companylogo.png" size="lg" sx={{border:'2px solid #5F35AE'}} />
            <Typography level='h4'>General Details</Typography>
        </CardContent>
        <Divider />
        <CardContent orientation='horizontal'>
        <Typography level='body-md'>Name :</Typography>
        <Typography level='body-md'>99x</Typography>
        </CardContent>
        <hr />
        <CardContent orientation='horizontal'>
        <Typography level='body-md'>Location :</Typography>
        <Typography level='body-md'>65 Walukarama Rd, Colombo 00300</Typography>
        </CardContent>
        <hr />
        <CardContent orientation='horizontal'>
        <Typography level='body-md'>Industry Type :</Typography>
        <Typography level='body-md'>Software Company</Typography>
        </CardContent>
        <hr />
        <CardContent orientation='horizontal'>
        <Typography level='body-md'>Contact Number :</Typography>
        <Typography level='body-md'>0114 721 194</Typography>
        </CardContent>
        <hr />
        
    </Card>
  )
}
