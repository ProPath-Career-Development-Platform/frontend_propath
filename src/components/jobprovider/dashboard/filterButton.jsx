import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import TuneIcon from '@mui/icons-material/TuneRounded';
import { Link as RouterLink } from 'react-router-dom';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';


export default function filterButton() {

  const [open, setOpen] = React.useState(false);

    const toggleDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpen(inOpen);
      };

  return (

    <React.Fragment>

      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<TuneIcon />}
        onClick={() => setOpen(true)}
      >
        Filter
      </Button>
     
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}

        sx={{
            zIndex: '10001',
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}>

            <Typography level="h6">Filters</Typography>
            
            </Box>
         </DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>

          <FormControl>
              <FormLabel sx={{ typography: 'title-sm', fontWeight: 'bold' }}>
                Title
              </FormLabel>

              <Input 
                placeholder="Enter Title"
                variant="outlined"

              
              />

          </FormControl>

          <Divider sx={{ mt: 'auto' }} />


          <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
              Date Range
            </Typography>

            <Stack direction="row" spacing={1} wrap>

            <FormControl>

              <FormLabel sx={{ typography: 'body-sm', fontWeight: 'bold' }}>
                From
              </FormLabel>

              <Input 
              type="date"
                placeholder="Enter Title"
                variant="outlined"

              
              />
          </FormControl>

          <FormControl>
              
                <FormLabel sx={{ typography: 'body-sm', fontWeight: 'bold' }}>
                  To
                </FormLabel>
  
                <Input 
                type="date"
                  placeholder="Enter Title"
                  variant="outlined"
  
                
                />

          </FormControl>

          </Stack>

          <Divider sx={{ mt: 'auto' }} />

          
            
          </DialogContent>

          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
             sx={{fontSize:{xs:'13px',sm:'sm'}}}
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <Button size='sm' sx={{fontSize:{xs:'13px',sm:'sm'}}} component={RouterLink} to="/jobprovider/my-jobs/shedule-interview">Confirm & Go to Schedule</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>


    
  );
}