import React , {useState, useEffect} from 'react'
import ImageSlider from '../../components/JobSeeker/course/imageslider'
import BasicCard from '../../components/JobSeeker/course/cardSlider'
import { Box } from '@mui/material'
import logo from '/logo.png'
import JSSearch from '../../components/JobSeeker/search'
import Alert from '../../components/JobSeeker/alert'
import ProfileDropdown from '../../components/JobSeeker/ProfileDropDown'
import DoneIcon from '@mui/icons-material/Done';
import { ModalClose, ModalDialog, Typography } from '@mui/joy'
import Chip from '@mui/joy/Chip';
import AccordionIndicator from '../../components/JobSeeker/course/accodion'
import CourseOverview from '../../components/JobSeeker/course/courseOverview'
import CourseFAQ from '../../components/JobSeeker/course/faq'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Modal from '@mui/joy/Modal'
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton'
import CloseIcon from '@mui/icons-material/Close';
const Course = () => {
    
  const images = ['/ml1.jpg','/ml2.png','/ml3.png']
  const[img, setImg] = useState(0)
 
  const [Open, setOpen] = useState(false)
  const headline = {title : 'Introduction to Flutter Course Online' , h1 : 'Stand Out in a Python Coding Interview' , 
                    description:'This Python Interview Course is the ultimate answer if you are looking to crack a job in python. It will take you through all the questions that can be expected from a python developer with answers explained in Hindi. In this Interview questions series, you will learn questions and answers with python basics and advanced topics that will help you get your desired python job.' ,
                    learner: ['App developers' , 'Software Developers' , 'Full Stack Developers' , 'Coding enthuisiastics']}

  useEffect(() =>{
     const change = setInterval(() => {
      
        setImg(prevImg => prevImg + 1)

        if(img ==2 ){
            setImg(0)
        }
        
     }, 6000);

     return () => clearInterval(change); 
  } , [img])

  return (
    <Box component="main"
                    className="MainContent"
                    sx={{
                    px: { xs: 2, md: 6 },
                    pt: {
                        xs: 'calc(12px + var(--Header-height))',
                        sm: 'calc(12px + var(--Header-height))',
                        md: 3,
                    },
                    pb: { xs: 2, sm: 2, md: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                    maxHeight: 'calc(100vh - 10px)',
                    overflow: 'auto ',
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
    }}>

        <Box  sx={{
                      display: 'flex',
                      mb: 1,
                      gap: 1,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'start', sm: 'center' },
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}>
                        
            <Box sx={{width : 130}}>
                <img src={logo} />
            </Box> 

                          
                        
                      
            <Box sx={{ display: 'flex' }}>
                <JSSearch/>
                <Alert />
                <ProfileDropdown />
            </Box>
        </Box>

        <Box sx={{backgroundColor: '#3f067a', width: '100%' , height:'60%'}}>
            <Box sx={{width: '60%' , marginTop : '3%' , marginBottom: '5%'}}>
                <Box sx={{marginLeft : '6%' , marginTop : '2%'}}>
                        <Typography sx={{ color: 'white' , fontSize : 25 , fontWeight: 'bold'}}>{headline.title}</Typography>
                    </Box>
                    <Box sx={{marginLeft : '6%' , marginTop : '8px'}}>
                        <Typography sx={{ color: 'white' , fontSize : 18 , }}>{headline.h1}</Typography>
                    </Box>
                    <Box sx={{marginLeft : '6%' , marginTop : '8px' , display: 'flex' , flexDirection: 'row' , gap: 4}}>
                        <Typography sx={{ color: 'white' , fontSize : 13  }}><GroupAddIcon sx={{color:'white' , marginRight: '5px'}}/>381 enrolled </Typography>
                        <Typography sx={{ color: 'white' , fontSize : 13 }}> <WhatshotIcon sx={{color:'white' , marginRight: '4px'}}/>54 remaining</Typography>
                        
                    </Box>
                   <Box sx={{marginLeft : '6%' , marginTop : '8px'}}>
                        <Typography sx={{ color: 'white' , fontSize : 13 , }}>{headline.description}</Typography>
                   </Box>
                    
            </Box>
                
              
        </Box>
        <Box sx={{position: 'absolute' , right: '8%' , top: '25%'}}>
                <BasicCard  url = {images[img]} callback = {(value)=>{setOpen(true)}}></BasicCard>
                </Box>
        <Box>
            <Box>
            <Box sx={{marginTop : '10px' , }}>
                <Typography sx={{fontWeight : 500, fontSize: '25px'}}>Skills you will learn</Typography>
            </Box>
            <Box sx={{ display : 'grid' ,  
                    gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                    sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
                    md: 'repeat(2, 1fr)', // 3 columns for medium and larger screens (desktop)
                }, width: '60%' , marginTop : '8px'}}>
            <Box sx={{marginTop : '10px' , gap: '10%'}}>
                <Box >
                    <Typography> <DoneIcon sx={{color: 'blue'}}/>Interview Skills</Typography>
                </Box>
                <Box>
                    <Typography> <DoneIcon sx={{color: 'blue'}}/>Top Python Interview Questions
                    </Typography>
                </Box>
                <Box >
                    <Typography> <DoneIcon sx={{color: 'blue'}}/>Interview Skills</Typography>
                </Box>

            </Box>

            <Box sx={{marginTop : '10px' ,   gap: '10%'}}>
        <Box >
                <Typography> <DoneIcon sx={{color: 'blue'}}/>Interview Skills</Typography>
            </Box>
            <Box>
                <Typography> <DoneIcon sx={{color: 'blue'}}/>Interview Skills</Typography>
            </Box>
            <Box >
                    <Typography> <DoneIcon sx={{color: 'blue'}}/>Interview Skills</Typography>
            </Box>


        </Box>

            

            </Box>
        
        
            </Box>
     
            <Box sx={{width : '60%' , marginTop : '40px'}} >
                <Box sx={{width: '100%' ,marginTop : '12px' , marginBottom : '12px'}}>
                <Typography sx={{fontWeight : 500, fontSize: '25px'}}>Who should learn this free Flutter course?</Typography>
                </Box>
                <Box sx={{display : 'grid' , gridTemplateColumns : 'repeat(3 , 1fr)' ,  gap:4 , marginTop : '25px'}}>
                    {
                        headline.learner.map((item , index) => (
                            <Chip key={index}>{item}
                            </Chip>
                        ))

                    }

                </Box>
            </Box>

            <Box sx={{width : '60%'}} >
                <Box sx={{width: '100%' ,marginTop : '40px' , marginBottom : '12px'}}>
                <Typography sx={{fontWeight : 500, fontSize: '25px'}}>What will you learn from this flutter course</Typography>
                </Box>
                <Box sx={{  gap:3 , marginTop : '25px'}}>
                    <AccordionIndicator sx = {{width: '100%'}}/>

                </Box>
            </Box>

            <Box sx={{width : '60%' , marginTop : '40px'}} >
                <Box sx={{width: '100%' ,marginTop : '12px' , marginBottom : '12px'}}>
                <Typography sx={{fontWeight : 500, fontSize: '25px'}}>Course Overview  </Typography>
                </Box>
                <Box>
                    <CourseOverview/>
                </Box>
            </Box>

            <Box sx={{width : '60%'}} >
                <Box sx={{width: '100%' ,marginTop : '40px' , marginBottom : '12px'}}>
                <Typography sx={{fontWeight : 500, fontSize: '25px'}}>FAQ</Typography>
                </Box>
                <Box sx={{  gap:3 , marginTop : '25px'}}>
                    <CourseFAQ sx = {{width: '100%'}}/>

                </Box>
            </Box>

        </Box>
       
        <React.Fragment>
            <Modal open = {Open} sx={{display: 'flex' , justifyContent: 'center' , alignItems: 'center' }}>
                 <ModalDialog>
                 <IconButton variant="solid" sx={{width: 'fit-content' , marginLeft: '90%' ,  "--IconButton-size": "25px" , backgroundColor: 'white'}} onClick={()=>{setOpen(false)}}>
                    <CloseIcon sx={{color:'black'}}/>
                 </IconButton>
              
                    <form
                    onSubmit={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    }}
                >
                    <Stack spacing={2}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input autoFocus required />
                       
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input required />
                    </FormControl>
                    <Button type="submit">Enroll</Button>
                    </Stack>
                </form>
              
                </ModalDialog>
            
            </Modal>
        </React.Fragment>
            
       
        
    </Box>
 
       
 
  )
}

export default Course