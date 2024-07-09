import React from 'react'
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/joy/Box';
import { Container } from '@mui/material';
import { typographyClasses } from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { tabClasses } from '@mui/joy/Tab';
import Divider from '@mui/joy/Divider';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import SettingsCompanyInfo from '../../../components/jobprovider/dashboard/SettingsCompanyInfo';
import SettingsFoundingInfo from '../../../components/jobprovider/dashboard/SettingsFoundingInfo';
import SettingsAccount from '../../../components/jobprovider/dashboard/SettingsAccount';


const Settings = () => {
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
                  Settings
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
                Settings
              </Typography>
              
            </Box>


            <Tabs
          defaultValue={0}
         
          sx={{
            bgcolor: 'transparent',
            
          }}
        >
          <TabList
           
            tabFlex={1}
            size="sm"
            sx={{
             
              left:'-10px',
              pl: { xs: 0, md: 0 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
            <BusinessOutlinedIcon sx={{display:{xs:'none' , sm:'block' ,md:'block'}}}/> Company Info
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
             <ArticleOutlinedIcon sx={{display:{xs:'none' , sm:'block' ,md:'block'}}}/> Founding Info
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
             <LanguageOutlinedIcon sx={{display:{xs:'none' , sm:'block' ,md:'block'}}}/> Social Media Profile
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={3}>
            <SettingsOutlinedIcon sx={{display:{xs:'none' , sm:'block' ,md:'block'}}}/> Account Settings
            </Tab>
          </TabList>

          <TabPanel value={0}>

          <SettingsCompanyInfo/>



          </TabPanel>

          <TabPanel value={1}>

          
          <SettingsFoundingInfo/>



          </TabPanel>

          <TabPanel value={3}>

          
          <SettingsAccount/>



          </TabPanel>


        </Tabs>


            
        



           

           
          </Box>

          

  )
}

export default Settings