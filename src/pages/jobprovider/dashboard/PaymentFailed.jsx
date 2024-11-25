import React from 'react'
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { AspectRatio } from '@mui/joy';
import { useNavigate } from 'react-router-dom';


const Page404 = () => {
  const navigate = useNavigate();
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
                
              </Typography>
              
            </Box>

            
              <Card orientation='horizontal' sx={{m:'auto', display:{xs:'none',sm:'flex'}}}>


                <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', p:5,gap:2}}>

               


                   
                    <Typography level='h2'>Payment Failed!</Typography>
                    <Typography level='body-md'>We encountered an issue while verifying your payment. Please try again later.</Typography>
                    <Button variant='soft' color='primary' sx={{width:'100px'}} onClick={() => navigate(-1)}>Try Again</Button>
                    

                </CardContent>

                <CardOverflow>

                    <AspectRatio ratio="10/9" objectFit='contain' sx={{display:{xs:'none',sm:'none', md:'block'},width:'550px'}}>
                        <img src="/payment-fail.png"/>
                    </AspectRatio>

                    <AspectRatio ratio="1" objectFit='contain' sx={{display:{xs:'none',sm:'block', md:'none'},width:'360px'}}>
                        <img src="/payment-fail.png"/>
                    </AspectRatio>

                    <AspectRatio ratio="1" objectFit='contain' sx={{display:{xs:'block',sm:'none', md:'none'},width:'100%'}}>
                        <img src="/payment-fail.png"/>
                    </AspectRatio>

                </CardOverflow>

              </Card>


              <Card  sx={{m:'auto', display:{xs:'block',sm:'none'}}}>

              <CardOverflow>

                 

                    <AspectRatio ratio="4/3" objectFit='contain'>
                        <img src="/404.png"/>
                    </AspectRatio>

                </CardOverflow>

                <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', p:1,gap:2, mt:2}}>

               


                   
                    <Typography level='h3'>We looked really hard</Typography>
                    <Typography level='body-sm'>But it appears the page you seek doesen't exist anymore.</Typography>
                    <Button variant='soft' color='primary' size="sm" sx={{width:'100px'}} onClick={() => navigate(-2)}>Go back</Button>
                    

                </CardContent>


                </Card>

                


            
        



           

           
          </Box>

          

  )
}

export default Page404