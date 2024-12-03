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
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from '@mui/icons-material/Info';

export default function ATSAccordion({res}) {
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
                
                sx={{
                  background: res.scores.content >= 75
                    ? 'lightgreen'
                    : res.scores.content >= 50
                    ? 'yellow'
                    : '#f38989'
                }}
                
              
            >
                <Typography>{res.scores.content}%</Typography>
            </Chip>
        </Box>
     
        

        </AccordionSummary>
        <AccordionDetails>
        {res.feedback.content.split('?').filter(info => info.trim() !== '').map((info)=>(
          <Box sx={{display:'flex' , flexDirection:'column', marginTop:'12px' ,marginBottom: '7px'}}>
            <Box sx={{display:'flex' , alignItems:'center'}}>
            <InfoIcon sx={{color:'neutral', fontWeight: 500, marginRight:'10px'}}/>
            <Typography >{info}</Typography>
            </Box>
          </Box>
          ))}
          {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Quantifying Impact</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Repetition</Typography></Box>
          <Box sx={{display:'flex',  marginBottom:'8px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Spelling and Grammar</Typography></Box> */}
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
                
                sx={{
                  background: res.scores.format >= 75
                    ? 'lightgreen'
                    : res.scores.format >= 50
                    ? 'yellow'
                    : '#f38989'
                }}
                
              
            >
                <Typography>{res.scores.format}%</Typography>
            </Chip>
        </Box>
     
        

         </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px'}}>
        {res.feedback.format.split('?').filter(info => info.trim() !== '').map((info)=>(
          <Box sx={{display:'flex' , flexDirection:'column', marginTop:'12px' ,marginBottom: '7px'}}>
            <Box sx={{display:'flex' , alignItems:'center'}}>
            <InfoIcon sx={{color:'neutral', fontWeight: 500, marginRight:'10px'}}/>
            <Typography >{info}</Typography>
            </Box>
          </Box>
          ))}          {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Resume Length</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Long Bullet Points</Typography></Box> */}
          
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
                sx={{
                  background: res.scores.skills >= 70
                    ? 'lightgreen'
                    : res.scores.skills >= 50
                    ? 'yellow'
                    : '#f38989'
                }}
                
              
            >
                <Typography>{res.scores.skills}%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
        {res.feedback.skills.split('?').filter(info => info.trim() !== '').map((info)=>(
          <Box sx={{display:'flex' , flexDirection:'column', marginTop:'12px' ,marginBottom: '7px'}}>
            <Box sx={{display:'flex' , alignItems:'center'}}>
            <InfoIcon sx={{color:'neutral', fontWeight: 500, marginRight:'10px'}}/>
            <Typography >{info}</Typography>
            </Box>
          </Box>
          ))}           {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Soft Skills</Typography></Box> */}
         
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
                sx={{
                  background: res.scores.sections >= 75
                    ? 'lightgreen'
                    : res.scores.sections >= 50
                    ? 'yellow'
                    : '#f38989'
                }}
                
              
            >
                <Typography>{res.scores.sections}%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails >
        {res.feedback.sections.split('?').filter(info => info.trim() !== '').map((info)=>(
          <Box sx={{display:'flex' , flexDirection:'column', marginTop:'12px' ,marginBottom: '7px'}}>
            <Box sx={{display:'flex' , alignItems:'center'}}>
            <InfoIcon sx={{color:'neutral', fontWeight: 500, marginRight:'10px'}}/>
            <Typography >{info}</Typography>
            </Box>
          </Box>
          ))}           {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Soft Skills</Typography></Box> */}
                   {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Essential Sections</Typography></Box> */}
          {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Personality</Typography></Box> */}
        
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
                sx={{
                  background: res.scores.style >= 75
                    ? 'lightgreen'
                    : res.scores.style >= 50
                    ? 'yellow'
                    : '#f38989'
                }}
                                
              
            >
                <Typography>{res.scores.style}%</Typography>
            </Chip>
        </Box>
     
        

            </AccordionSummary>
        <AccordionDetails>
        {res.feedback.style.split('?').filter(info => info.trim() !== '').map((info)=>(
          <Box sx={{display:'flex' , flexDirection:'column', marginTop:'12px' ,marginBottom: '7px'}}>
            <Box sx={{display:'flex' , alignItems:'center'}}>
            <InfoIcon sx={{color:'neutral', fontWeight: 500, marginRight:'10px'}}/>
            <Typography >{info}</Typography>
            </Box>
          </Box>
          ))}           {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Soft Skills</Typography></Box> */}
                   {/* <Box sx={{display:'flex' ,marginBottom: '7px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Email Address</Typography></Box>
          <Box sx={{display:'flex' ,marginBottom: '7px'}}><DoneIcon sx={{color:'green', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Active Voice</Typography></Box>
          <Box sx={{display:'flex',  marginBottom:'8px'}}><CloseIcon sx={{color:'red', fontWeight: 'bold', marginRight:'10px'}}/> <Typography>Buzzwords and Clinches</Typography></Box> */}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
