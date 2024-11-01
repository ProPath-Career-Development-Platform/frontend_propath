import React from 'react'
import { useEffect , useState } from 'react'
const Timer = ({expiryDate}) => {
    const [time,setTime] = useState()
    const timer = () => {
        const today = new Date()
        const future = new Date(expiryDate)
        const difference = future - today
        
        if (isNaN(future.getTime())) {
          return "Invalid Date"; // Handles cases where the date is not valid
        }
     
        let seconds = Math.floor(difference / 1000); 
        let minutes = Math.floor(seconds / 60); 
        let hours = Math.floor(minutes / 60); 
        let days = Math.floor(hours / 24); 
    
        
        seconds = seconds % 60;
        minutes = minutes % 60;
        hours = hours % 24;
        days = days;
        if(seconds<0){
          return "Job has expired"
        }
        else if(days >= 1){
            return days + " days " + hours + " hours " + minutes + " minutes "
        }
        else if (hours >=1 ) {
        return hours + " : " + minutes + " minutes " + seconds + " seconds"
        }
        else {
        return minutes + " minutes " + seconds + " seconds"
        }
        
    }
    

    useEffect(()=> {
        const interval = setInterval(()=>{
            setTime(timer());
        },1000)

        return ()=> clearInterval(interval)

    },expiryDate)

  
  return (
    <div>{time}</div>
  )
}

export default Timer