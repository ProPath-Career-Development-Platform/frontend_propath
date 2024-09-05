import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Snackbar from '@mui/joy/Snackbar';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function DeleteButton({snackOpen, setSnackOpen, handelDelete }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        
        variant="solid"
        color="danger"
        endDecorator={<DeleteForever />}
        onClick={() => setOpen(true)}
      >
        Remove
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to remove the event?
          </DialogContent>
          <DialogActions>
            <Button  variant="solid" color="danger" onClick={() => {setOpen(false); handelDelete()}}>
              Remove
            </Button>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>


      <Snackbar
                    variant="soft"
                    size="md"
                    color="danger"
                    open={snackOpen}
                    onClose={() => setSnackOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<WarningAmberIcon />}
                    endDecorator={
                      <Button
                        onClick={() => setSnackOpen(false)}
                        size="sm"
                        variant="danger"
                        color="warning"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                   

                   Deletion failed. Try again later.
                   
                    
                  </Snackbar>
    </React.Fragment>
  );
}