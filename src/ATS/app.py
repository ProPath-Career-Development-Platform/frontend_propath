#streamlit run app.py

#or conda init
#conda activate venv/
#pip install google-generativeai



import streamlit as st
import base64
import io
import google.generativeai as genai
import os
import PyPDF2 as pdf
from dotenv import load_dotenv
import json

load_dotenv() ## load all our environment variables

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_gemini_response(input,pdf_cotent,prompt):
    model=genai.GenerativeModel('gemini-pro')
    response=model.generate_content(input)
    return response.text

def input_pdf_text(uploaded_file):
    reader=pdf.PdfReader(uploaded_file)
    text=""
    for page in range(len(reader.pages)):
        page=reader.pages[page]
        text+=str(page.extract_text())
    return text

#calculate_match_precentage
def calculate_match_percentage(pdf_content, job_description):
    # Basic example: Count common keywords
    resume_words = set(pdf_content.lower().split())
    job_words = set(job_description.lower().split())
    common_words = resume_words & job_words
    
    if len(job_words) == 0:
        return 0.0
    
    match_percentage = (len(common_words) / len(job_words)) * 100
    return match_percentage

## Streamlit App

st.set_page_config(page_title="ATS Resume EXpert")
st.header("ATS Tracking System")
input_text=st.text_area("Job Description: ",key="input")
uploaded_file=st.file_uploader("Upload your resume(PDF)...",type=["pdf"])


if uploaded_file is not None:
    st.write("PDF Uploaded Successfully")

submit1 = st.button("Tell Me About the Resume")


submit3 = st.button("Percentage match")


input_prompt1 = """
 You are an experienced Technical Human Resource Manager,your task is to review the provided resume against the job description. 
  Please share your professional evaluation on whether the candidate's profile aligns with the role. 
 Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
"""

input_prompt3 = """
You are an skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science and ATS functionality, 
your task is to evaluate the resume against the provided job description. give me the percentage of match if the resume matches
the job description. First the output should come as percentage and then keywords missing and last final thoughts.
"""

if submit1:
    if uploaded_file is not None:
        pdf_content=input_pdf_text(uploaded_file)
        response=get_gemini_response(input_prompt1,pdf_content,input_text)
        st.subheader("The Repsonse is")
        st.write(response)
    else:
        st.write("Please Upload the PDF file")

# elif submit3:
#     if uploaded_file is not None:
#         pdf_content=input_pdf_text(uploaded_file)
#         response=get_gemini_response(input_prompt3,pdf_content,input_text)
#         st.subheader("The Repsonse is")
#         st.write(response)
#     else:
#         st.write("Please Upload the PDF file")

if submit3:
    if uploaded_file is not None:
        pdf_content = input_pdf_text(uploaded_file)
        match_percentage = calculate_match_percentage(pdf_content, input_text)
        st.subheader("Match Percentage")
        st.write(f"{match_percentage:.2f}%")
    else:
        st.write("Please Upload the PDF file")


#using 5 times
# def get_gemini_response(input_text, pdf_content, prompt, num_runs=5):
#     model = genai.GenerativeModel('gemini-pro')
#     results = []

#     for _ in range(num_runs):
#         response = model.generate_content(input_text)
#         results.append(response.text)
    
#     # Here, you could implement a more sophisticated aggregation method.
#     # For demonstration, let's just return the first result.
#     return results[0]

# # Usage in the streamlit app
# if submit1:
#     if uploaded_file is not None:
#         pdf_content = input_pdf_text(uploaded_file)
#         response = get_gemini_response(input_prompt1, pdf_content, input_text, num_runs=5)
#         st.subheader("The Response is")
#         st.write(response)
#     else:
#         st.write("Please Upload the PDF file")

# elif submit3:
#     if uploaded_file is not None:
#         pdf_content = input_pdf_text(uploaded_file)
#         response = get_gemini_response(input_prompt3, pdf_content, input_text, num_runs=5)
#         st.subheader("The Response is")
#         st.write(response)
#     else:
#         st.write("Please Upload the PDF file")
