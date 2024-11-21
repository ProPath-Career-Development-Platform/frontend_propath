
import axios from 'axios';
import dayjs from 'dayjs';

// Function to check if the user is subscribed
export async function checkUserSubscription() {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get('http://localhost:8080/jobprovider/check-subscripton', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

       //response give true or false

       if(response.data === true){
           return true;
       }
      else{
            return false;
     }

        
        

        
    } catch (error) {
        return true;
    }
}