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

export default function CourseFAQ() {

  const info = {title: 'FAQ' , 
                information : [['What is Flutter, and why should I learn it for app development?', 'Flutter is an open-source software development tool used for creating applications for mobile, web, and desktop from a single codebase. This helps you to develop high-quality apps efficiently. ' ] ,
                               ['What are the prerequisites to learn this flutter course ? ' ,  'The prerequisites for the Flutter course are basic programming knowledge and familiarity with object-oriented programming (OOP). ' ] ,
                               ['Is this flutter course comprehensive enough to kickstart a career in development' , 'Overall flutter course helps to kick start your career in app development and also gain lots of experience in real-time projects. '] ,
                              ]

  }
  return (


    
    <AccordionGroup
    sx={{
        width: '100%',
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: 'rotate(45deg)',
        },
        [`& .${accordionClasses.root}`]: {
          bgcolor: 'background.level1',
          borderRadius: 'md',
          borderBottom: '1px solid',
          borderColor: 'background.level2',
        },
        [`& .${accordionClasses.expanded}`]: {
          bgcolor: 'white',
          borderRadius: 'md',
          borderBottom: '1px solid',
          borderColor: 'background.level2',
        },
        
      }}
    >
      
       {info.information.map((item , index) => (
            <Accordion key={index} sx={{lineHeight : '40px'}}>
                <AccordionSummary indicator={<AddIcon />}>{item[0]}</AccordionSummary>
                <AccordionDetails sx={{lineHeight : '25px' , marginLeft : '0px' , border: '1px solid'
                  }}>
            
                <Typography sx = {{
                    alignItems: 'center' ,display: 'flex' , flexDirection : 'row' , marginLeft : '25px'
                }}>
            
               
                {item[1]}
                </Typography>
               
                </AccordionDetails>
            </Accordion>
       ))}
       </AccordionGroup>

       
  );
}
