
import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

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
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  },
  {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  },
  {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  },
  
  {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }
  

]
};

function SurveyQuestions() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
   
  }, []);

  survey.showNavigationButtons = false;

  return <Survey model={survey} />;
}

export default SurveyQuestions;