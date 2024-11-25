import * as React from 'react';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { AspectRatio } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function PaymentModel({open}) {

    const navigate = useNavigate();
  
  return (
    <React.Fragment>
      
      <Modal open={open}>
        <ModalDialog variant="outlined" role="alertdialog" size="lg">
          
          
          <DialogContent>


            


<Card variant='outline'>

<CardOverflow>

 

    <AspectRatio ratio="11/9" objectFit='contain'>
        <img src="/pay-model.png"/>
    </AspectRatio>

</CardOverflow>

<CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', p:5,gap:2}}>




   
    <Typography level='h3'>Your Subscription Plan Expired!</Typography>
    <Typography level='body-md'>Please renew your plan to continue service.</Typography>
    <Button variant='soft' color='primary' size="md" sx={{width:'100px'}} onClick={() => navigate("/jobprovider/plans-and-billing")}>Renew</Button>
    

</CardContent>


</Card>







          </DialogContent>
          
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}