import React from 'react'
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import PaymentIcon from '@mui/icons-material/Payment';
import Chip from '@mui/joy/Chip';
import { ListItemDecorator } from '@mui/joy';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import DownloadIcon from '@mui/icons-material/Download';


function PlanAndBilling() {

  function createData(name, calories, fat, carbs,) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData(1050, 'Dec 7, 2019 23:26', 'Premium', 'LKR 5000', ),
    createData(1050, 'Dec 7, 2019 23:26', 'Premium', 'LKR 5000', ),
    createData(1050, 'Dec 7, 2019 23:26', 'Premium', 'LKR 5000', ),
    createData(1050, 'Dec 7, 2019 23:26', 'Premium', 'LKR 5000', ),
    createData(1050, 'Dec 7, 2019 23:26', 'Premium', 'LKR 5000', ),
  ];
  


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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                href="#some-link"
                fontSize={12}
                fontWeight={500}
              >
                Dashboard
              </Link>
              <Typography color="primary" fontWeight={500} fontSize={12}>
                Plans and Billing
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
              Plans and Billing
            </Typography>
          
          </Box>

          {/*breadcrumbs over*/}
          <Divider />

          <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                    gap: 1.5,
                    marginBottom: '1rem',
                  }}>


                  <Card  sx={{ borderRadius: 10, maxWidth: '100%',  }}>
                        
                        <CardContent>

                          <Typography level="body-sm" fontWeight="lg">Current Plan</Typography>
                         <Typography level="h2" fontSize="xlg" sx={{mt:1,mb:1}}>BASIC</Typography>

                          <Typography level="body-sm">
                          The Basic Plan is ideal for individual job seekers and small businesses needing to post a few job listings, offering essential features at an affordable price.
                          </Typography>

                          <CardActions >

                            <Box sx={(theme)=>({
                                display: 'flex',
                                gap: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',

                                [theme.breakpoints.down('500')]: {
                                  display: 'flex',
                                  gap: 1,
                                  flexShrink: 1,
                                  flexDirection: 'column',
                                  alignItems: 'start',
                                  minWidth: 100,
                                  
                                }
                            })}>
                              <Button variant="solid" size ="md">Change Plan </Button>
                              <Button variant="soft" size="md">Cancel Plan</Button>

                            </Box>

                           

                          

                          </CardActions>



                        </CardContent>

                  </Card>

                  <Card orientation='horizontal'  sx={{  borderRadius: 10, maxWidth: '100%' }}>

                        <CardContent>


                                <Typography level="body-sm" fontWeight="lg">Next Invoice</Typography>
                                <Typography color='primary' level="h2" fontSize="xlg" sx={{mt:1}}>LKR 10,000</Typography>
                                <Typography  level="title-lg"  sx={{mb:0.5}}>Nov 28, 2024</Typography>

                                <Typography  level="body-md"  sx={(theme)=>({
                                  
                                  mb:3,
                                  fontSize: '0.875rem',
                                  [theme.breakpoints.up('834')]: {
                                    fontSize:'md'
                                  }


                                })}
                                  
                                  
                                  >Package Started: <Typography fontWeight="md">Jan 28, 2024</Typography></Typography>

                                <Button variant="solid" size ="md" endDecorator={<PaymentIcon/>}>Pay Now </Button>

                        </CardContent>

                        
                        
                        <AspectRatio  variant="soft" ratio={1} objectFit="fill"  sx={(theme)=>({
                              display: 'none',
                             
                              
                            [theme.breakpoints.up('1267')]: {
                              display: 'block',
                              width: 200,
                             
                          
            
                            }
                          
                        })}>
                                
                                <img
                                  src="/dash-credit2.png"
                                  loading="lazy"
                                  alt=""
                                />
    
                        </AspectRatio>
                      


                  </Card>

          </Box>

          <Typography  level="h4" >Are you satisfied with the benefits of your plan?</Typography>



          <Card orientation='horizontal' variant='outlined' sx={{ borderRadius:10 }}>

            <CardContent>

            <Typography level="title-lg" >Current Plan Benefits</Typography>

           

            <List size="md" >

              <ListItem>
                 <ListItemDecorator>
                    <CheckCircleOutlineIcon color="success" />
                 </ListItemDecorator>

                  1 Job Postings per month
              </ListItem>

              <ListItem>
                 <ListItemDecorator>
                    <CheckCircleOutlineIcon color="success" />
                 </ListItemDecorator>

                 Access to a limited resume database
              </ListItem>

              <ListItem>
                 <ListItemDecorator>
                    <CheckCircleOutlineIcon color="success" />
                 </ListItemDecorator>

                 Job alert notifications
              </ListItem>



            </List>

            </CardContent>

            <Divider />

            <CardContent>

            <Typography level="title-lg" >Remaining Plan Benefits</Typography>
            

            <List size="md" >

              <ListItem>
                <ListItemDecorator>
                    <BlockIcon color="danger"/>
                </ListItemDecorator>

                  50 Job Postings per month
              </ListItem>

              <ListItem>
                <ListItemDecorator>
                    <BlockIcon color="danger"/>
                </ListItemDecorator>

                Full access to resume database
              </ListItem>

              <ListItem>
                <ListItemDecorator>
                  <BlockIcon color="danger"/>
                </ListItemDecorator>

                Advanced applicant tracking system
              </ListItem>

              <ListItem>
                <ListItemDecorator>
                  <BlockIcon color="danger"/>
                </ListItemDecorator>

                Advanced applicant tracking system
              </ListItem>


              <ListItem>
                <ListItemDecorator>
                  <BlockIcon color="danger"/>
                </ListItemDecorator>

                Advanced applicant tracking system
              </ListItem>




              </List>



            </CardContent>
          </Card>

          
          
    <Typography  level="h4" sx={{ mt:2 }} >Latest Invoices</Typography>


    <Sheet variant="outlined" sx={{ pt: 1, borderRadius: 'lg' , }}>
      <Table
        size="lg"
        hoverRow
        
      >
        
        <thead>
          <tr>
            <th >#ID</th>
            <th>Date</th>
            <th>Plan</th>
            <th>Amount</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td><Button size='sm'><DownloadIcon/></Button></td>
          
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
          







        </Box>
  )
}

export default PlanAndBilling