import React, {useEffect, useState} from 'react'
import { Box } from '@mui/joy'
import Typography from '@mui/joy/Typography'
import Chip from '@mui/joy/Chip';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ATSAccordion from './ATSSeeker/ATSaccordion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import JSSearch from './search';
import logo from '/logo.png'
import Alert from '../../components/JobSeeker/alert';
import ProfileDropdown from './ProfileDropDown';
import Tooltip from '@mui/joy/Tooltip';
import Button from '@mui/joy/Button';
import InfoIcon from '@mui/icons-material/Info';
import CircularProgress from '@mui/joy/CircularProgress';
import LoopIcon from '@mui/icons-material/Loop';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import { ExitToApp, Spellcheck } from '@mui/icons-material';

const JobScore = () => {
  const [progress, setProgress] = useState(0)
  const [state, setState] = useState("neutral")
  useEffect(() =>{
    const change = setInterval(() => {
     
       

       if(progress <=76 ){
           setProgress(progress+1)
       }
       
       console.log(progress)
    }, 100);

    return () => clearInterval(change); 
 })
  return (
    <Box
            component="main"
            className="MainContent"
            sx={{
              background : '#f5f7fc',
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
              overflow:'auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              }
           
            }}
          >

        <Box
            sx={{
                      display: 'flex',
                      mb: 1,
                      gap: 1,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'start', sm: 'center' },
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                      >
                        <Box sx={{width : 130}}>
                        <img src={logo} />
                        </Box>

                          
                        
                      
                        <Box sx={{ display: 'flex' }}>
                            <JSSearch/>
                            <Alert />
                            <ProfileDropdown />
                           


                        </Box>
                  </Box>




      <Box sx={{display:'flex'}}>
        <Box sx = {{width: '40%' , border: "solid 1px #e0e0e0" , boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' ,  margin: '15px' , background: 'white ' , height: 'fitContent'}}>
        <Box sx={{marginTop: '40px' , display: 'flex' ,  flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center' ,  borderBottom: "solid 1px #e0e0e0" , borderWidth: '60%'}}>
            
            <Typography sx={{fontSize: '26px' , fontWeight: 400}}>Your Score</Typography>
          
            <CircularProgress size="lg" determinate value={progress} sx={{marginTop: '10px'}}>
              
            </CircularProgress>
            <Typography sx={{fontSize: '26px' , fontWeight: 500 , color:'red'}}> {progress} / 100</Typography>
            <Typography sx={{fontSize: '14px' , fontWeight: 400 , marginBottom: '10px'}}>13 Issues</Typography>
        </Box>
        <Box sx={{display:'flex' , justifyContent:'space-around'}}>
           <ATSAccordion></ATSAccordion>
        </Box>
         </Box>

      {state == "neutral" && (
        <Box sx = {{width: '60%' , border: "solid 1px #e3e9f5" , boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' , height: 'fitContent' , margin: '15px'  ,padding: '20px 30px 10px 30px' , background: 'white ' }}>
          <Box sx={{display: 'flex' , flexDirection: 'row' , borderBottom: 'solid 2px #e3e9f5', paddingBottom: '10px' , alignItems: 'center' , position: 'relative'}}>
            <Typography sx={{fontSize: '26px' , fontWeight: 400}}><RateReviewIcon sx={{color: 'purple' , marginRight: '10px'}}/>Review</Typography>
            <Chip sx={{position: 'absolute' , right: '0px' , background: '#e3e9f5'}}>2 Issues Found</Chip>
          </Box>
         
          <Box sx={{

            display: 'grid', 
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
              sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
              md: 'repeat(2, 1fr)', // 3 columns for medium and larger screens (desktop)
            }, 
           
            gap: 2, 
            marginTop: '20px'
            
          }}>
          <Box sx={{border: "solid 1px #e0e0e0" ,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' , padding:'15px 0 15px 10px' }}>
          <Box sx={{position: 'relative' , display: 'flex' , flexDirection: 'row', alignItems: 'center'}}>
            <Typography sx={{fontWeight : 500}}>
            Spelling and Grammar
            </Typography>
            <Box sx={{position: 'absolute' , right: 1 , }}>
              <Button sx={{ background: 'white', ":hover": { backgroundColor: '#f5f5f5' } }} onClick={()=> (

                setState('Spelling')
              )}>
              <NavigateNextIcon color='neutral' sx = {{width: '25px' , height: '25px' }}/>
              </Button>
                
              </Box>
          </Box>

          <Box sx={{display:'flex' , justifyContent: "center" , marginTop: '20px'}}>
          <CheckCircleOutlineIcon color="success" sx={{ width: '60px', height: '60px' }} />
          </Box>
          <Box sx = {{display: 'flex' , justifyContent: 'center' , marginTop: '10px' }}>
              <Typography sx={{fontWeight : 500 , color : 'green'}}>
                No Errors Found
              </Typography>
             
          </Box>
         
         
       

          </Box>
          <Box sx={{border: "solid 1px #e0e0e0" ,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' , padding:'15px 0 15px 10px' }}>
          <Box sx={{position: 'relative' , display: 'flex' , flexDirection: 'row' , alignItems: 'center'}}>
            <Typography sx={{fontWeight : 500}}>
            Repetition
            </Typography>
            <Box sx={{position: 'absolute' , right: 1 , }}>
              <Button sx={{ background: 'white', ":hover": { backgroundColor: '#f5f5f5' } }}  onClick={()=> (

                setState('Repetition')
              )}>
              <NavigateNextIcon color='neutral' sx = {{width: '25px' , height: '25px' }}/>
              </Button>

            </Box>

            </Box>

            <Box sx={{display:'flex' , justifyContent: "center" , marginTop: '20px'}}>
              <WarningAmberIcon color='danger'  sx={{ width: '60px', height: '60px' }} />
            </Box>

            <Box sx = {{display: 'flex' , justifyContent: 'center' , marginTop: '10px'}}>
              <Typography sx={{fontWeight : 500 , color : 'red'}}>
                Some words are repeated 
              </Typography>
            </Box>
           
          
           </Box>
           <Box sx={{border: "solid 1px #e0e0e0" ,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' , padding:'15px 0 15px 15px' }}>
            <Box sx={{display:'flex' , flexDirection: 'row' , position: 'relative'}}>
              <Box>
                <Typography sx={{fontWeight : 500}}>
                Resume Length 
                </Typography>
              </Box>
             
              <Box sx={{position: 'absolute' , right: 10}}>
                <Chip sx={{background: 'lightgreen'}}><Typography sx={{fontSize: '13px' , fontWeight: 500}}>231 words</Typography></Chip>
              </Box>
            </Box>
          
            <Box sx={{display:'flex' , justifyContent: "center" , marginTop: '20px'}}>
              <WarningAmberIcon color='danger'  sx={{ width: '60px', height: '60px' }} />
            </Box>

            <Box sx = {{display: 'flex' , justifyContent: 'center' , marginTop: '10px'}}>
              <Typography sx={{fontWeight : 500 , color : 'red'}}>
                Resume Length is too Short
              </Typography>
            </Box>

            <Box sx = {{display: 'flex' , justifyContent: 'center' , marginTop: '10px'}}>
         
            <Tooltip title={
              <Box sx={{}}>
                <Typography>The ideal resume size is between <Typography sx={{color: 'green' , fontWeight: 'bold'}}>400 </Typography>and <Typography sx={{color: 'red' , fontWeight: 'bold'}}>800 </Typography> words, anything below 400 is considered too short. Think of other relevant sections and experiences you may include..</Typography>
              </Box>
            }  placement="right" sx={{background: 'white' , width: '200px'}}>
              <Button variant="plain" color="neutral">
                <InfoIcon/>
              </Button>
            </Tooltip>
            </Box>


           </Box>
           <Box sx={{border: "solid 1px #e0e0e0" ,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' ,  padding:'15px 0 15px 15px' }}>
           <Box sx={{display:'flex' , flexDirection: 'row' , position: 'relative'}}>
              <Box>
                <Typography sx={{fontWeight : 500}}>
                File Size & Length
                </Typography>
              </Box>
             
              <Box sx={{position: 'absolute' , right: 10}}>
                <Chip sx={{background: 'lightgreen'}}><Typography sx={{fontSize: '13px' , fontWeight: 500}}>1.87 MB</Typography></Chip>
              </Box>
            </Box>
              <Box sx={{display:'flex' , justifyContent: "center" , marginTop: '20px'}}>
                 <CheckCircleOutlineIcon color="success" sx={{ width: '60px', height: '60px' }} />
              </Box>

              <Box sx = {{display: 'flex' , justifyContent: 'center' , marginTop: '10px'}}>
              <Typography sx={{fontWeight : 500 , color : 'green'}}>
                File size is Ideal 
              </Typography>
              </Box>
              
              <Box sx = {{display: 'flex' , justifyContent: 'center' , marginTop: '10px'}}>
         
              <Tooltip title={
                <Box sx={{}}>
                  <Typography>Ideally, your resume should be less than 2MB in size. Anything larger will most likely not be accepted on majority of platforms.</Typography>
                </Box>
              }  placement="right" sx={{background: 'white' , width: '200px'}}>
                <Button variant="plain" color="neutral">
                  <InfoIcon/>
                </Button>
              </Tooltip>
              </Box>
           </Box>
          </Box> 
        </Box>
      )}

        {state == "Spelling" && (
          <Box sx = {{width: '60%' , border: "solid 1px #e3e9f5" , boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' , height: 'fitContent' , margin: '15px'  ,padding: '20px 30px 10px 30px' , background: 'white ' }}>
          <Box sx={{display: 'flex' , flexDirection: 'row' , borderBottom: 'solid 2px #e3e9f5', paddingBottom: '10px' , alignItems: 'center' , position: 'relative'}}>
            <Typography sx={{fontSize: '26px' , fontWeight: 400}}><Spellcheck sx={{color: 'purple' , marginRight: '10px'}}/>Spelling and Grammar</Typography>
            <Box sx={{position: 'absolute' , right: 1 , }}>
              <Button sx={{ background: 'white', ":hover": { backgroundColor: '#f5f5f5' } }} onClick={() => (
                  setState("neutral")
              )}>
              <NavigateNextIcon color='neutral' sx = {{width: '30px' , height: '30px' }}/>
              </Button>

            </Box>
            
          </Box>

          <Box sx={{display:'flex' , justifyContent: "center" , marginTop: '20px'}}>
                 <CheckCircleOutlineIcon color="success" sx={{ width: '200px', height: '200px' }} />
          </Box>
          <Box sx={{gap: 2,  marginTop: '30px' }}>
            <Typography sx={{fontSize: '35px' , color: 'green' , fontWeight: 'bold' , justifyContent: 'center' , display: 'flex' , marginBottom: '15px'}}>Congratulations!!!</Typography>
            <Typography sx={{fontSize: '20px' , color: 'green' , fontWeight: 500 , justifyContent: 'center' , display: 'flex'}}>This CV is free from spelling and grammatical errors.</Typography>

          </Box>

          </Box>

          
         )}

    {state == "Repetition" && (
          <Box sx = {{width: '60%' , border: "solid 1px #e3e9f5" , boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' , height: 'fitContent' , margin: '15px'  ,padding: '20px 30px 10px 30px' , background: 'white ' }}>
          <Box sx={{display: 'flex' , flexDirection: 'row' , borderBottom: 'solid 2px #e3e9f5', paddingBottom: '10px' , alignItems: 'center' , position: 'relative'}}>
            <Typography sx={{fontSize: '26px' , fontWeight: 400}}><LoopIcon sx={{color: 'purple' , marginRight: '10px'}}/>Repetition</Typography>
            <Box sx={{position: 'absolute' , right: 1 , }}>
              <Button sx={{ background: 'white', ":hover": { backgroundColor: '#f5f5f5' } }} onClick={() => (
                  setState("neutral")
              )}>
              <NavigateNextIcon color='neutral' sx = {{width: '30px' , height: '30px' }}/>
              </Button>

            </Box>
            
          </Box>

          <Box sx={{display:'flex' , justifyContent: "center" , marginTop: '40px'}}>
              <WarningAmberIcon color='danger'  sx={{ width: '80px', height: '80px' }} />
            </Box>
          <Box sx={{gap: 2,  marginTop: '20px' }}>
          
            <Typography sx={{fontSize: '20px' , color: 'red' , fontWeight: 'bold', justifyContent: 'center' ,  textAlign: 'center', display: 'flex'}}>
            We found that the following words are repeated frequently in your resume:
            </Typography>
          <Box sx={{

          display: 'grid', 
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
            sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
            md: 'repeat(3, 1fr)', // 3 columns for medium and larger screens (desktop)
          }, 

          gap: 2, 
          marginTop: '20px',
          marginLeft: '40px'


          }}>
            <Chip sx={{border:"1px solid #f38989"}}><Typography sx={{lineHeight: '30px'}}>Project: 8 times</Typography></Chip>
            <Chip sx={{border:"1px solid #f38989"}}><Typography sx={{lineHeight: '30px'}}>Design: 5 times</Typography></Chip>
            <Chip sx={{border:"1px solid #f38989"}}><Typography sx={{lineHeight: '30px'}}>React: 4 times</Typography></Chip>
            <Chip sx={{border:"1px solid #f38989"}}><Typography sx={{lineHeight: '30px'}}>Frontend: 4 times</Typography></Chip>
            <Chip sx={{border:"1px solid #f38989"}}><Typography sx={{lineHeight: '30px'}}>Software: 4 times</Typography></Chip>
            
            </Box>
          </Box>
                    
         
          </Box>

          
         )}
        

   
        

      </Box>

    
    </Box>
  
  )
}

export default JobScore