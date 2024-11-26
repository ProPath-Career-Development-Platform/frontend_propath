import React, { useState } from 'react';
import { Modal, Typography, Box, Button } from '@mui/joy';
import RadioVariants from './experience';
import ExperienceRadio from './experience';
import SalaryRadio from './salary';
import JobType from './jobType';
import Education from './education';
import JobLevel from './jobLevel';
import AdvancedfilterSearch from './advancedfilterSearch';
import LocationSearch from './locationsearch';
import ComboBox from './category';
import TuneIcon from '@mui/icons-material/Tune';
const AdvancedFilter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ display: 'flex', borderRadius: '2px', border: '1px solid #ccc' }}>
      <Button onClick={handleOpen} sx={{ backgroundColor: 'white', ":hover": { backgroundColor: "white" , opacity: 0.5} }}>
       <TuneIcon sx={{ color: 'black', ":hover": { color: "black"} }} />
      </Button>

      </Box>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="advanced-filter-title"
        aria-describedby="advanced-filter-description"
      >
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
        <Box sx={{display : 'flex' , flexDirection : 'row' , gap: 6 , alignItems: 'center' , justifyContent : 'center' , marginBottom : '10px'}}>
          <AdvancedfilterSearch/>
          <LocationSearch/>
          <ComboBox/>
        </Box>
        <Box sx= {{display: 'grid' , gridTemplateColumns: {
                              xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                              sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
                              md: 'repeat(3, 1fr)',
                              lg: 'repeat(5,1fr)' // 3 columns for medium and larger screens (desktop)
                            }, gap: 5 , marginBottom: 5}}>
            <Box >
                 <Typography sx = {{fontSize : '18px' , fontWeight : 500}}>Experience</Typography>
                 <ExperienceRadio/>
            </Box>
            <Box >
            <Typography sx = {{fontSize : '18px' , fontWeight : 500 , marginBottom : '8px'}}>Salary</Typography>
                 <SalaryRadio/>
            </Box>
            <Box>
            <Typography sx = {{fontSize : '18px' , fontWeight : 500 , marginBottom : '8px'}}>Job Type</Typography>
                <JobType/>
            </Box>
            <Box>
            <Typography sx = {{fontSize : '18px' , fontWeight : 500 , marginBottom : '8px'}}>Education</Typography>
                <Education/>
            </Box>

            <Box>
            <Typography sx = {{fontSize : '18px' , fontWeight : 500 , marginBottom : '8px'}}>Job Level</Typography>
                <JobLevel/>
            </Box>

            
        </Box>

        <Box>
              <Button sx={{backgroundColor: 'blue' , position: 'absolute' , right: 15 , bottom: 15}}>
               Search
              </Button>
        </Box>
        
        </Box>
      </Modal>
    </div>
  );
};

export default AdvancedFilter;
