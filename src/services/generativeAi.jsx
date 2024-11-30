import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  export const generateQuestions = async (jobTitle) => {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
  
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };
  
    const chatSession = model.startChat({
      generationConfig,
      history: [
    ],
    });
  
    const result = await chatSession.sendMessage(
      `Generate 10 questions using the SurveyJS format for the job title "${jobTitle}". The questions should be relevant to this job title and designed to collect information from job seekers. Use a mix of text, multiple-choice, and rating question types. 
    
    Each question should be structured as follows:
    1. Include a unique \`id\` (e.g., "1", "2", etc.).
    2. Specify a \`name\` (e.g., "question1", "jobExperience").
    3. Define a \`type\` (e.g., "text", "radiogroup", "dropdown", "matrix").
    4. Include a \`title\` to explain the question.
    
    If applicable, provide a \`choices\` array for multiple-choice questions or \`columns\` and \`rows\` for matrix questions. 
    
    **Example Output:**
    [
      {
        "id": "1",
        "name": "keySkills",
        "type": "text",
        "title": "What are your key skills and competencies relevant to this job role?"
      }

      {
        "id": "2",
        "name": "jobExperience",
        "type": "radiogroup",
        "title": "Do you have prior experience in this job role?",
        "choices": ["Yes", "No"]
      },
      {
        "id": "3",
        "name": "technicalSkills",
        "type": "text",
        "title": "List the technical skills relevant to this job role."
      },
      {
        "id": "4",
        "name": "proficiencyLevel",
        "type": "matrix",
        "title": "Rate your proficiency in the following skills:",
        "columns": [
          { "value": "Beginner", "text": "Beginner" },
          { "value": "Intermediate", "text": "Intermediate" },
          { "value": "Advanced", "text": "Advanced" }
        ],
        "rows": [
          { "value": "Communication", "text": "Communication" },
          { "value": "Problem Solving", "text": "Problem Solving" },
          { "value": "Technical Knowledge", "text": "Technical Knowledge" }
        ]
      },
      {
        "id": "5",
        "name": "jobInterestReason",
        "type": "text",
        "title": "Why are you interested in this job role?"
      }
    ]
    `
    );
    
    const generatedQuestions = result.response.text();
    
    console.log(JSON.parse(generatedQuestions));
    return JSON.parse(generatedQuestions);
  };
  