import React from 'react';
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Pagination = ({ currentPage, total ,  callback  }) => {
  const left = () => {
    const newValue = currentPage -1;
    callback(newValue); // Pass the new value to the parent
  };

  const right = () => {
    const newValue =  currentPage+1;
    callback(newValue); // Pass the new value to the parent
  };


  var arr = []
  if(currentPage == 0 ){
    arr = [1, 2, 3]
  }
  else if(currentPage == total){
    arr = [total-1 , total  , total + 1]
  }
  else{
    arr = [currentPage  , currentPage + 1 , currentPage +2]
  }
  return (
    <Box sx={{ gap: 4, display: 'flex', marginLeft: {sm:'30%' ,lg: '400px'} , marginTop: "30px", marginBottom: '15px' }}>
      <Box sx={{display : currentPage ===0? 'none' : 'block' , color : currentPage == 0? 'black' : 'blue'}}>
        <Button onClick={left}><KeyboardArrowLeftIcon /></Button>
      </Box>

      {arr.map((item,index) => (
            item> 0 && item <= total + 1 &&(
            <Button sx={{color : currentPage + 1 == item ? 'black' : 'white' , fontWeight: currentPage+1 == item ? 'bold' : 'none' , border: currentPage+1 == item ? 'solid 3px black' : 'none'}} onClick={()=> {

                const newValue = item - 1
                callback(newValue)
            }}
            
            >{item}</Button>
          )
        
      ))}
      <Box>
        <Button sx = {{display : currentPage >= total? 'none' : 'block'}}
        onClick={right}><KeyboardArrowRightIcon />
        </Button>
        </Box>
    </Box>
  );
};

export default Pagination;
