
import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  },
  {
    name: "Experience",
    title: "How many years of experience do you have :",
    type: "text"
  },
  
  
 
  
]
};

function SurveyQuestions({callback}) {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
   
  }, []);

  survey.showNavigationButtons = false;

  return (
  <Box sx={{display:'flex' , justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
  
    <Survey model={survey} />
  
    
    <Button sx={{width: '80px' , margin: '30px 0 10px 0'}} onClick={()=> (callback(2))} >Next</Button>
  </Box>)

}

export default SurveyQuestions;