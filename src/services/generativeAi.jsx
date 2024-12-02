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
  
  export const CVanalysis = async (cvText) => {
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
      `You are an expert resume evaluator. I will provide a  a CV text. Your task is to evaluate the CV based on the following criteria:
    
    1. *Style*: Assess the formatting, consistency, and readability of the CV.? Consider font size, alignment, use of whitespace, and overall presentation.?
    2. *Format*: Evaluate the logical structure and proper organization of sections (e.g., Summary, Skills, Experience, Education).?
    3. *Skills*: Match the skills listed in the CV against the job description. Highlight missing but relevant skills.?
    4. *Sections*: Check for the presence of essential sections (e.g., Contact Information, Summary, Experience, Skills, Education).?
    5. *Spelling and Grammar*: Identify spelling and grammatical errors.?
    6. *Repetition*: Check for unnecessary repetition of information.? List repeated words (exclude common words and only show which technical words are repeated. ) and the number of times each word appears.?
    7. *Resume Length*: Return the actual text length in the the CV?
    8. *Content*: Evaluate the clarity, and completeness of the CV.? Ensure the candidate effectively highlights key skills, experience, and achievements tailored to the job description.? The content should be clear, concise, and impactful without unnecessary jargon or vague statements.?
    
    ### Output:
    Provide the evaluation as a JSON object with a percentage score for each criterion and an overall percentage score. Also, include specific feedback for improvement under each criterion. Include a list of repeated words with their counts under the 'repetition' criterion.
    
    #### Example Output:
    \\\`json
    {
      "scores": {
        "style": 85,
        "format": 90,
        "skills": 75,
        "sections": 80,
        "spelling_and_grammar": 95,
        "repetition": 88,
      },
      "overall_score": 86,
      "resume_length": 431 words,
      "feedback": {
        "style": "The font and alignment are consistent, but the use of whitespace could improve readability.",
        "format": "The CV is well-organized, but the education section is not detailed enough.",
        "skills": "The CV covers most required skills but is missing 'Project Management' as listed in the job description.",
        "sections": "The CV is missing a summary section.? Add a brief summary to highlight key strengths.",
        "spelling_and_grammar": {"I are here" , "They has not done that" } if no grammar errors are found just return an empty array,
        "repetition": {
          "feedback": "The description of roles in the experience section repeats similar phrases.? Consolidate for clarity.",
          "repeated_words": {
            "management": 5,
            "strategy": 3,
            "budgeting": 2
          }
        },
        "resume_length": "The CV length is appropriate for the level of experience."
        "content" : "The cv is complete but the candidate has highlighted important skills."
      }
    }
    \\\`
    
    #### Input:
    - *CV Text*: "${cvText}"
    
    Use the job description to evaluate relevance and provide feedback tailored to the candidate's strengths and gaps. Output the JSON object as described above, including the repeated words and their counts under the 'repetition' criterion. when a line ends use "?" so i could identify each line separately. This is important`
    );
    
    const generatedQuestions = result.response.text();
    
    console.log(JSON.parse(generatedQuestions));
    return JSON.parse(generatedQuestions);
  };

  
  