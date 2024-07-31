import React , {useState , useEffect} from 'react'
import courses from '/courses.png';
import logo from '/logo.png';
import wso2 from '/wso2.png';
import { Box } from '@mui/joy';
import BasicCard from './cardSlider';

const Imageslider = () => {
  const images = ['../../../../public/courses.png','../../../../public/wso2.png','../../../../public/logo.png']
  const[img, setImg] = useState(0)
  
  useEffect(() =>{
     const change = setInterval(() => {
      
        setImg(prevImg => prevImg + 1)

        if(img ==2 ){
            setImg(0)
        }
        console.log("hello" , img)
     }, 5000);

     return () => clearInterval(change); 
  } , [img])
  return (
    <div>I
        <Box sx = {{width: '300px' , height: '200px'}}>
        <img src= {images[img]}></img>
        <BasicCard></BasicCard>
        </Box>
      
    </div>

  )
}

export default Imageslider