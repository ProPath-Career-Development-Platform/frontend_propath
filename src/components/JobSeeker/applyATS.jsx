import React, { useEffect, useState, useRef } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Add from '@mui/icons-material/Add';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { Avatar } from '@mui/joy';
import { Circle } from '@mui/icons-material';
import { TextareaAutosize } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CircularProgress from '@mui/material/CircularProgress';
import { CVanalysis } from '../../services/generativeAi';
import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry"; // Ensure the worker is included
export default function ApplyATS({ title, open1 }) {
  
  
  const navigate = useNavigate();
  const inputCvRef = useRef(null);
  const [open, setOpen] = useState(open1);
  const [load, setLoad] = useState(false);
  const [time, setTime] = useState(0);
  const [jobDesc, setJobDesc] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  
  
  

 

  const handleJobDec = (event) =>{
    const dec = event.target.value;
    setJobDesc(dec);

  }



  const submit = async () => {
   setLoad(true);

   const res = await CVanalysis(extractedText);
   console.log(res);
   setLoad(false);
   if(res){
    navigate('/jobseeker/jobscore' , { state: { res } });
    }


  };

  const handleFile = async (event) => {
    const file = event.target.files[0];
    if (file) {
      
      const text = await extractTextFromPDF(file);
      setExtractedText(text);
     
     
    }
  };

  const extractTextFromPDF = async (file) => {
    const fileData = await readFileAsArrayBuffer(file);
    const pdf = await pdfjs.getDocument({ data: fileData }).promise;
    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((item) => item.str).join(" ");
    }

    console.log("Extracted Text:", text);
    return text;
  };

  // Utility function to read a file as an ArrayBuffer
  const readFileAsArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  

  return (
    <React.Fragment>
      <Button
        
        sx={{backgroundColor:'primary'}}
        onClick={() => setOpen(true)}

      >
        <Typography sx = {{display : {xs:'none' , sm:'none' , md: 'none' , lg: 'block'}, backgroundcolor: 'white'}}><Typography sx = {{color: 'white'}}>Upload Your Resume</Typography></Typography>  <ArrowRightAltIcon sx = {{marginLeft: {xs : '0px' , sm : '3px ' ,color: 'white'}}}></ArrowRightAltIcon>
      </Button>
      {!load && (
        <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
          <ModalDialog>
            <DialogTitle sx={{ marginBottom: '10px', paddingBottom: '3px', borderBottom: '1px solid #E8DFDF' }}>Resume Checker</DialogTitle>
            <Box>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  {/* <FormControl fullWidth>
                    <FormLabel>Add Job Description</FormLabel>
                    <TextareaAutosize
                      autoFocus
                      required
                      onChange={handleJobDec}
                      minRows={6} // Adjust this value to control the height
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: 'solid 1px',
                        borderColor: '#d1d5db', // Tailwind's gray-300 equivalent
                        outline: 'none',
                        resize: 'none',
                      }}
                      sx={{
                        '&:focus': {
                          borderColor: '#6b21a8', // Tailwind's purple-700 equivalent
                          boxShadow: '0 0 0 2px rgba(107, 33, 168, 0.5)',
                        },
                      }}
                    />
                  </FormControl> */}
                  <FormControl>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "2px dashed #0071FF",
                        borderRadius: "8px",
                        padding: "20px",
                        width: "100%",
                        maxWidth: "500px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f0f7ff",
                        },
                      }}
                      onClick={() => inputCvRef.current.click()}
                    >
                      <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
                      <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        Add CV/Resume
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Only PDF format available. Max file size 10MB
                      </Typography>
                      <input
                        type="file"
                        id="cv-file-upload"
                        accept=".pdf"
                        hidden
                        ref={inputCvRef}
                        onChange={handleFile}
                      />
                    </Box>
                  </FormControl>
                  <Button loading={load} type="submit" onClick={submit} sx={{ width: 'auto' }} >Check Score</Button>
                </Stack>
              </form>
            </Box>
          </ModalDialog>
        </Modal>
      )}

      {load && (
        <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
          <ModalDialog>
            <DialogTitle sx={{ marginBottom: '10px', paddingBottom: '3px', borderBottom: '1px solid #E8DFDF' }}>Resume Checker</DialogTitle>
            <Box sx= {{display:'flex' , justifyContent: 'center'}}>
              {/* Loading or transition content can be added here */}
              <CircularProgress />
            </Box>
          </ModalDialog>
        </Modal>
      )}
    </React.Fragment>
  );
}
