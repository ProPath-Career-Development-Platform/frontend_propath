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
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MovingIcon from '@mui/icons-material/Moving';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';


export default function filterButton({formData, setFormData, handleFilter,handleReset,count}) {

  const [open, setOpen] = React.useState(false);




  const handleChange = (event) => {
    setFormData({...formData, status:event.target.value});
   // console.log(event.target.value);
   console.log(formData);
  };
  

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
        disabled={count === 0}
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
                name="title"
                value={formData.title}
                onChange={
                  (e) => setFormData({...formData, title:e.target.value})
                }

              
              />

          </FormControl>

          <Divider sx={{ mt: 1 }} />


          <Typography level="title-sm" fontWeight="bold" sx={{ mt: 1 }}>
              Date Range
            </Typography>

            <Stack direction="row"  wrap sx={{display:{xs:'grid',md:'flex'} , gap:1}}>

            <FormControl>

              <FormLabel sx={{ typography: 'body-sm', fontWeight: 'bold' }}>
                From
              </FormLabel>

              <Input 
                type="date"
                placeholder=""
                variant="outlined"
                name="fromDate"
                value={formData.fromDate}
                onChange={
                  (e) => setFormData({...formData, fromDate:e.target.value})
                }

              
              />
          </FormControl>

          <FormControl>
              
                <FormLabel sx={{ typography: 'body-sm', fontWeight: 'bold' }}>
                  To
                </FormLabel>
  
                <Input 
                type="date"
                  placeholder=""
                  variant="outlined"
                  name="toDate"
                  value={formData.toDate}
                  onChange={
                    (e) => setFormData({...formData, toDate:e.target.value})
                  }
  
                
                />

          </FormControl>

          </Stack>

          <Divider sx={{ mt: 1 }} />

          <FormControl>
              <FormLabel sx={{ typography: 'title-sm', fontWeight: 'bold' }}>
                Location
              </FormLabel>

              <Input 
                placeholder="Enter Location"
                variant="outlined"
                name="location"
                value={formData.location}
                onChange={
                  (e) => setFormData({...formData, location:e.target.value})
                }

              
              />

          </FormControl>

          <Divider sx={{ mt: 1}} />

          <FormControl>
              <FormLabel sx={{ typography: 'title-sm', fontWeight: 'bold' }}>
                Status
              </FormLabel>

              <RadioGroup
                name="status"
                defaultValue={formData.status}
                value={formData.status}
                onChange={handleChange}
                >
      <List
        sx={{
          minWidth: 240,
          '--List-gap': '0.5rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
          '--ListItemDecorator-size': '32px',
        }}
      >
        {[ 'Active', 'Completed'].map((item, index) => (
          <ListItem variant="outlined" key={item} sx={{ boxShadow: 'sm' }}>
            <ListItemDecorator>
              {[ <MovingIcon />, <DoneAllIcon />][index]}
            </ListItemDecorator>
            <Radio
              overlay
              value={item}
              label={item}
              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: '2px solid',
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup>



          </FormControl>

          <Divider sx={{ mt: 1}} />

          
            
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
              onClick={() => {setOpen(false); handleReset();}}
              component={RouterLink} 
              to="/jobprovider/meet-up"
            >
              Remove Filter
            </Button>
            <Button  sx={{fontSize:{xs:'13px',sm:'sm'}}}  onClick={()=>{ setOpen(false); handleFilter(); }}>Filter Events</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>


    
  );
}