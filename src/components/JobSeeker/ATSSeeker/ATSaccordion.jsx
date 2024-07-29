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
        <Box >
            <Chip
                size="sm"
                variant="outlined"
                color="danger"
                
              
            >
                <Typography>35%</Typography>
            </Chip>
        </Box>
     
        

        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Format</Typography>
        </Box>     
        <Box >
            <Chip
                size="sm"
                variant="outlined"
                color="danger"
                
              
            >
                <Typography>35%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:'flex'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>ATS Parse Rate</Typography></Box>
          <Box sx={{display:'flex'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Quantifying Impact</Typography></Box>
          <Box sx={{display:'flex'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Repetition</Typography></Box>
          <Box sx={{display:'flex'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Spelling and Grammar</Typography></Box>
       
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Skills</Typography>
        </Box>     
        <Box >
            <Chip
                size="sm"
                variant="outlined"
                color="danger"
                
              
            >
                <Typography>35%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Section</Typography>
        </Box>     
        <Box >
            <Chip
                size="sm"
                variant="outlined"
                color="danger"
                
              
            >
                <Typography>35%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary sx={{display:'flex' , justifyContent:'center'}}>
        
        <Box>
        <Typography>Style</Typography>
        </Box>     
        <Box >
            <Chip
                size="sm"
                variant="outlined"
                color="danger"
                
              
            >
                <Typography>35%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
