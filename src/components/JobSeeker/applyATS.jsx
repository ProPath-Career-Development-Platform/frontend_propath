import * as React from 'react';
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
import { useRef } from 'react';
import { TextareaAutosize } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LinearProgressWithLabel from '../linearProgress';
import { useNavigate } from 'react-router-dom';
import {
    
    faPlusCircle,
  
  } from "@fortawesome/free-solid-svg-icons";

export default function ApplyATS({title , open1}) {
  const navigate = useNavigate()
  const inputCvRef = useRef(null);
  const [open, setOpen] = React.useState(open1);
  const [load, setLoad] = React.useState(false)

  const handleNowClick = () => {
    setLoad(true)
  
  };
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
  return (
    <React.Fragment>
      <Button
        
        sx={{backgroundColor:'primary'}}
        onClick={() => setOpen(true)}
      >
        <Typography sx = {{display : {xs:'none' , sm:'none' , md: 'none' , lg: 'block'}, backgroundcolor: 'white'}}>Upload Your Resume</Typography>  <ArrowRightAltIcon sx = {{marginLeft: {xs : '0px' , sm : '3px ' ,color: 'white'}}}></ArrowRightAltIcon>
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex' , justifyContent: 'center' , overflow: 'auto'}}>
        <ModalDialog>
          <DialogTitle sx={{marginBottom: '10px' , paddingBottom:'3px' , borderBottom: '1px solid #E8DFDF' }}>Resume Checker</DialogTitle>
          <Box>
          
            

          

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
            <FormControl fullWidth>
                <FormLabel>Add Job Description</FormLabel>
                <TextareaAutosize
                    autoFocus
                    required
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
              <Button type="submit"  onClick={handleNowClick} sx={{width:'auto'}}>Check Score</Button>
            </Stack>
          </form>
    
           <LinearProgressWithLabel load= {load}></LinearProgressWithLabel>

          </Box>
          </ModalDialog>
         
          
      </Modal>
    </React.Fragment>
  );
}
