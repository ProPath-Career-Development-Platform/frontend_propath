import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { Modal } from '@mui/joy';
export default function LinearProgressWithLabel({load}) {
  const [progress, setProgress] = React.useState(0);
  const [open,setOpen] = React.useState(load)
  console.log(load) 
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (

    <Modal open = {open} sx={{display:'flex' , justifyContent: 'center' , alignItems:'center' , background:'white'}}>
   
    
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
      }}
    >
     <LinearProgress
                                    determinate
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                    thickness={32}
                                    value={progress}
                                    sx={{
                                        '--LinearProgress-radius': '0px',
                                        '--LinearProgress-progressThickness': '24px',
                                        boxShadow: 'sm',
                                        borderColor: 'neutral.500',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#0071FF',
                                        }
                                    }}
                                >
                                    <Typography
                                        level="body-xs"
                                        fontWeight="xl"
                                        textColor="common.white"
                                        sx={{ mixBlendMode: 'difference', position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
                                    >
                                        LOADING… {`${Math.round(progress)}%`}
                                    </Typography>
                                </LinearProgress>
    </Box>
 
    </Modal>
   
  );
}
