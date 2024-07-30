import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { Typography } from '@mui/material';
import { Box } from '@mui/joy';
import Chip from '@mui/joy/Chip';
import DoneIcon from '@mui/icons-material/Done';
import { green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
export default function ATSAccordion() {
  return (
    <AccordionGroup
      sx={{
        maxWidth: 400,
        [`& .${accordionClasses.root}`]: {
          marginTop: '0.5rem',
          transition: '0.2s ease',
          '& button:not([aria-expanded="true"])': {
            transition: '0.2s ease',
            paddingBottom: '0.625rem',
          },
          '& button:hover': {
            background: 'transparent',
          },
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
         
          borderRadius: 'md',
          borderBottom: '1px solid',
          borderColor: 'background.level2',
        },
        '& [aria-expanded="true"]': {
          boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
        },
      }}
    >
      <Accordion>
        <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Content</Typography>
        </Box>     
        <Box sx={{position:'absolute' , right: 45}}>
            <Chip
                size="sm"
                variant="outlined"
                
                sx={{bgcolor:'lightgreen'}}
                
              
            >
                <Typography>87%</Typography>
            </Chip>
        </Box>
     
        

        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex'  , marginTop:'12px' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 500, marginRight:'10px'}}/> <Typography >ATS Parse Rate</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Quantifying Impact</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Repetition</Typography></Box>
          <Box sx={{display:'flex',  marginBottom:'8px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Spelling and Grammar</Typography></Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
      
        <Box>
        <Typography>Format</Typography>
        </Box>     
        <Box sx={{position:'absolute' , right: 45}} >
            <Chip
                size="sm"
                variant="outlined"
                
                sx={{background:'Yellow'}}
                
              
            >
                <Typography>63%</Typography>
            </Chip>
        </Box>
     
        

         </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px'}}>
          <Box sx={{display:'flex'  , marginTop:'12px' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 500, marginRight:'10px'}}/> <Typography >File Format & Size</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Resume Length</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Long Bullet Points</Typography></Box>
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Skills</Typography>
        </Box>     
        <Box sx={{position:'absolute' , right: 45}}>
            <Chip
                size="sm"
                variant="outlined"
                sx={{background: 'lightGreen'}}
                
              
            >
                <Typography>94%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:'flex'  , marginTop:'12px' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 500, marginRight:'10px'}}/> <Typography >Hard Skills</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Soft Skills</Typography></Box>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Section</Typography>
        </Box>     
        <Box sx={{position:'absolute' , right: 45}}>
            <Chip
                size="sm"
                variant="outlined"
                sx={{background : "lightgreen"}}
                
              
            >
                <Typography>76%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails >
          <Box sx={{display:'flex'  , marginTop:'12px' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 500, marginRight:'10px'}}/> <Typography >Contact Information</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Essential Sections</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Personality</Typography></Box>
        
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Style</Typography>
        </Box>     
        <Box sx={{position:'absolute' , right: 45}}>
            <Chip
                size="sm"
                variant="outlined"
                sx={{background : '#f38989'}}
                
              
            >
                <Typography>35%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:'flex'  , marginTop:'12px' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 500, marginRight:'10px'}}/> <Typography >Design</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Email Address</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Active Voice</Typography></Box>
          <Box sx={{display:'flex',  marginBottom:'8px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Buzzwords and Clinches</Typography></Box>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
