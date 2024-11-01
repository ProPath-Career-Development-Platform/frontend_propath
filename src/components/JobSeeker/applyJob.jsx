import React, { useEffect, useState } from 'react';

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
import seba from '/seba.jpg'
import Add from '@mui/icons-material/Add';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { Avatar } from '@mui/joy';
import { Circle } from '@mui/icons-material';
import IndicatorStepper from './stepper';
import { useRef } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SurveyQuestions from './surveyQuestions';
import { keyframes } from '@emotion/react';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import {
    
    faPlusCircle,
  
  } from "@fortawesome/free-solid-svg-icons";

export default function BasicModalDialog({title , callback}) {


    const scaleFadeIn = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
    `;

    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
      setShowIcon(true);
    }, []);
  const inputCvRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [num,setNum] = React.useState(1)
  const handleCvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 10000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setCvFile(reader.result);
        setCvFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size more than 10MB");
    }
  };

  const submit = ()=> {
        callback(1)
  }

  const getValuefromChild = (value)=> {
        setNum(value)
  }
  return (
    <React.Fragment>
      <Button
        
        sx={{backgroundColor:'blue'}}
        onClick={() => setOpen(true)}
      >
        <Typography sx = {{display : {xs:'none' , sm:'none' , md: 'none' , lg: 'block'}, color: 'white'}}>Apply Now</Typography>  <ArrowRightAltIcon sx = {{marginLeft: {xs : '0px' , sm : '3px ' ,color: 'white'}}}></ArrowRightAltIcon>
      </Button>


      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex' , justifyContent: 'center' , overflow: 'auto'}}>
      
        <ModalDialog>
        <Box sx={{margin: "15px 0 15px 0" }}>
        <IndicatorStepper callback = {getValuefromChild} num = {num}></IndicatorStepper>
        </Box>
        {num==1 && (
          <Box sx={{width: '500px'}}>
            
           <SurveyQuestions callback = {getValuefromChild}
       >
            
           </SurveyQuestions>
         
            </Box>
        )}
          {num==2 && (
            <Box sx={{width: '500px'}}>
   <DialogTitle sx={{marginBottom: '10px' , paddingBottom:'3px' , borderBottom: '1px solid #E8DFDF' }}>Contact Info</DialogTitle>
   <Box>

   <Box sx={{display:'flex' , gap: 3 , mt: '25px'}}> 
         
         <Avatar src={seba} sx={{ width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
         <Box sx={{  }}>
         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Santhush Fernando</Typography>
         <Typography variant="body1" sx={{  fontSize: '13px' }}>SFernando@gmail.com</Typography>
         <Typography variant="body1" sx={{  fontSize: '13px'  }}>Sri Lanka</Typography>
         </Box>
        
   </Box>
     

   

   <form
     onSubmit={(event) => {
       event.preventDefault();
       setOpen(false);
     }}
   >
     <Stack spacing={2}>
       <FormControl>
         <FormLabel>Email</FormLabel>
         <Input autoFocus required />
       </FormControl>
       <FormControl>
         <FormLabel>Phone</FormLabel>
         <Input required />
       </FormControl>
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
                   onChange={handleCvUpload}
                 />
               </Box>
       </FormControl>
            <Button
                type="submit"
                onClick={() => {
                  setNum(3);
                  setTimeout(() => {
                    callback(1);
                  }, 3000); // Delay of 5 seconds
                }}
              >
                Submit Application
      </Button>
     </Stack>
   </form>



   </Box>
   </Box>)}

    {num == 3 && (

       <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
          <ModalDialog>
            <DialogTitle sx={{ marginBottom: '10px', paddingBottom: '3px', borderBottom: '1px solid #E8DFDF' }}><Typography sx={{ color: 'green' , fontSize: '23px'}}>Successful</Typography></DialogTitle>
            <Box sx= {{display:'flex' , justifyContent: 'center'}}>
              {/* Loading or transition content can be added here */}
              {showIcon && (
              <DoneAllIcon
                sx={{
                  fontSize: 50,
                  animation: `${scaleFadeIn} 1s ease-in-out`,
                  color: 'green'
                }}
              />
            
      ) }
      
            </Box>
          </ModalDialog>
        </Modal>
    )}
       
          </ModalDialog>
          
      </Modal>
    </React.Fragment>
  );
}
