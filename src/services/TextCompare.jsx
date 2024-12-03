import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const TextCompare = async (cvText, jobDescription) => {
  // Initialize generative model
  console.log("job Des:",jobDescription);
  console.log(cvText);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 0.5,  // Less creativity, more similarity-focused
    topP: 0.9,
    topK: 40,
    maxOutputTokens: 1024,  // Limit the output tokens to ensure brevity
    responseMimeType: "application/json",
  };

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  // The prompt for the AI model to compare CV text and job description
  const result = await chatSession.sendMessage(
    
    `
  Compare the following CV text with the job description and calculate a similarity percentage.
  Return ONLY a JSON object like this:
  {
    "percentage": 78
  }
  
  CV Text: 
  "${cvText}"
  
  Job Description: 
  "${jobDescription}"
  `
    
  );

  // Parse the result, assuming the AI model returns a similarity percentage
  

  
console.log("result response :",result.response);
  const generatedResponse = result.response.text();
    
    console.log(JSON.parse(generatedResponse));
    return JSON.parse(generatedResponse);
  
};
