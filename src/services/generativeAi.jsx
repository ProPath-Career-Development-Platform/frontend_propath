import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  export const generateQuestions = async (jobTitle) => {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
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
  
    const result = await chatSession.sendMessage(`Generate 5 questions related to this job title using SurveyJS. job title is ${jobTitle}. The questions should be a mix of text and multiple-choice types, structured similarly to the example provided below. These questions will be asked from  companies to job seekers. example output  {\n      id:\"1\",\n      name: \"question1\",\n      type: \"text\",\n      title: \"What is your name?\"\n    },\n    {\n      id:\"2\",\n      name: \"question2\",\n      type: \"radiogroup\",\n      title: \"What is your gender?\",\n      choices: [\"Male\", \"Female\", \"Other\"]\n    }`);
    const generatedQuestions = result.response.text();
    
    return JSON.parse(generatedQuestions);
  };

  
  