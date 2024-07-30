import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/joy';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import { accordionClasses } from '@mui/joy/Accordion';
import AddIcon from '@mui/icons-material/Add';

export default function AccordionIndicator() {

  const info = {title: 'Introduction to Flutter Course Online' , 
                information : [['Part 1 - Introduction' ,'1.01 Introduction' ] , ['Part 2 - Introduction to Dart' , 'Introduction to Dart'] , ['Part 3 - Creating your first flutter project' , 'Creating your first Flutter Project'] , ['Part 4 - Introduction to widgets' , 'Introduction to widgets' ]]
  }
  return (


    
    <AccordionGroup
      sx={{
        width : '100%' , 
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: 'background.level1',
            borderRadius: 'md',
            borderBottom: '1px solid',
            borderColor: 'background.level2',
          },
        
      }}
    >
      <Accordion sx={{ lineHeight  : '40px'}}>
      <AccordionSummary indicator={<AddIcon />} sx={{ bgcolor: 'background.level1',
            borderRadius: 'md',
            borderBottom: '1px solid',
            borderColor: 'background.level2'}}>{info.title}
       </AccordionSummary>
       <AccordionDetails>
       {info.information.map((item , index) => (
            <Accordion key={index}>
                <AccordionSummary indicator={<AddIcon />}>{item[0]}</AccordionSummary>
                <AccordionDetails sx={{lineHeight : '25px' , marginLeft : '0px'   }}>
            
                <Typography sx = {{
                    alignItems: 'center' ,display: 'flex' , flexDirection : 'row' , marginLeft : '25px'
                }}>
            
                <FiberManualRecordIcon sx={{ fontSize: '10px' , color : '#1179ef' , marginRight :'2px'  }}/>
                {item[1]}
                </Typography>
               
                </AccordionDetails>
            </Accordion>
       ))}

       </AccordionDetails>
       
      
      </Accordion>
    </AccordionGroup>

  );
}
