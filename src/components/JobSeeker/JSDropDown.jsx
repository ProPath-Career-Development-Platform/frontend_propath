import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';
import Box from '@mui/joy/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Divider from '@mui/joy/Divider';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';
import LocationOn from '@mui/icons-material/LocationOn';
import Checkbox from '@mui/joy/Checkbox';
import { ButtonBase, Typography, alertTitleClasses } from '@mui/material';

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];

const handleCheckboxClick = (item) => {
  setSize(item);
};
const currencyClick = () => {
  alert("clicked")
};

export default function JSDropDown(props) {
  const SIZES = props.sizes;
  const [size, setSize] = React.useState('Medium');
  const [btnState, setbtnState] = React.useState('loading');
  const [currency, setCurrency] = React.useState('dollar');
 
  return (
    <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>{props.name}</MenuButton>
      <Menu sx={{ minWidth: 150, '--ListItemDecorator-size': '24px' }}>
        <ListDivider />
        {props.proptype == 1 && (
          <ListItem nested >
            <List aria-label="Font sizes">
              {SIZES.map((item) => (
                <MenuItem
                  key={item}
                  role="menuitemradio"
                  aria-checked={item === size ? 'true' : 'false'}
                  onClick={() => handleCheckboxClick(item)}
                  
                >
                 
                  <Checkbox label = {item} size="md"  sx = {{width: '100%'}}/>
                </MenuItem>
              ))}
            </List>
          </ListItem>
        )}
        {props.proptype == 0 && (
          <ListItem nested  sx={{ width: 330 }}>
            <List aria-label="Font sizes">
              <MenuItem>
                      <FormControl>
                      <FormControl sx={{mb:2} }  
                    >
                      <Stack spacing={1.5}>
                      <FormLabel>Currency</FormLabel>
                        <Input
                          placeholder="Amount"
                          startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
                          endDecorator={
                            <React.Fragment>
                              <Divider orientation="vertical" />
                              <Select
                                variant="plain"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                slotProps={{
                                  listbox: {
                                    variant: 'outlined',
                                  },
                                }}
                                sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
                              >
                                <Option value="dollar">US dollar</Option>
                                <Option value="baht">Thai baht</Option>
                                <Option value="yen">Japanese yen</Option>
                              </Select>
                            </React.Fragment>
                          }
                          sx={{ width: 300 }}
                        />
                        
                      </Stack>
                      </FormControl>
                      
                
               
                      <FormControl sx={{mb:2} }  
                      onClick = { () => currencyClick() }>
                      <Stack spacing={1.5}>
                      <FormLabel>Paid every</FormLabel>
                        <Input
                          placeholder="Amount"
                          startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
                          endDecorator={
                            <React.Fragment>
                              <Divider orientation="vertical" />
                              <Select
                                variant="plain"
                                value={currency}
                                onChange={(_, value) => setCurrency(value)}
                                slotProps={{
                                  listbox: {
                                    variant: 'outlined',
                                  },
                                }}
                                sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
                                onClick={currencyClick}

                              >
                                <Option value="dollar">US dollar</Option>
                                <Option value="baht">Thai baht</Option>
                                <Option value="yen">Japanese yen</Option>
                              </Select>
                            </React.Fragment>
                          }
                          sx={{ width: 300 }}
                        />
                        
                      </Stack>
                      </FormControl>

                      <FormControl sx={{mb:2} }  
                      onClick = { () => currencyClick() }>
                        <FormLabel>Max Salary</FormLabel>
                          <Input
                              name="minSalary"
                              placeholder="Enter Minimum Salary"
                              startDecorator={<Button disabled variant="soft" color="neutral">LKR</Button>}
                            />
                      </FormControl>
                       
                      <FormControl sx={{mb:2} }  
                      onClick = { () => currencyClick() }>
                          <FormLabel>Min Salary</FormLabel>
                            <Input
                                name="minSalary"
                                placeholder="Enter Minimum Salary"
                                startDecorator={<Button disabled variant="soft" color="neutral">LKR</Button>}
                              />
                      </FormControl>

                      </FormControl>
                        
                 
                  
              </MenuItem>
              <Box sx={{ position: 'relative' , height:60 , padding: 2 }}>
                      <Button  sx={{position: 'absolute' , right: 20}}>Submit</Button>
              </Box>
            </List>
          </ListItem>
        )}

        {props.proptype == 2 && (
          <ListItem nested >
            <List aria-label="Font sizes">
              {SIZES.map((item) => (
                <MenuItem
                  key={item}
                  role="menuitemradio"
                  aria-checked={item === size ? 'true' : 'false'}
                  onClick={() => handleCheckboxClick(item)}
                  indicator = {SIZES[0]}
                  
                >
                 
                 <Typography variant="body1" sx={{ width: '100%' }}>
                        {item}
                 </Typography>
                </MenuItem>
              ))}
            </List>
          </ListItem>
        )}
      </Menu>
    </Dropdown>
  );
}
