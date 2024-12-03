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
import { useState } from 'react';
import Slider from '@mui/joy/Slider';


export default function JSDropDown(props) {

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [sizes,setSizes]= props.sizes;
  const [size, setSize] = React.useState('Medium');
  const [btnState, setbtnState] = React.useState('loading');
  const [currency, setCurrency] = React.useState('dollar');
  const [filterList, setFilterList] = React.useState([]);
  const [filterType, setFilterType] = useState('')
  const currencies = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'BTC', label: '฿' },
    { value: 'JPY', label: '¥' },
  ];
  const [open,setOpen] = useState(false)
  
 
 
  const handleCheckboxClick = (item) => {
    setFilterType(props.name)
    setFilterList((prevFilterList) => {
      // If item is already in the filter list, remove it; otherwise, add it
      if (prevFilterList.includes(item)) {
        return prevFilterList.filter((i) => i !== item);
      } else {
        return [...prevFilterList, item];
      }
    });
  };

  const [minSalary, setMinSalary] = useState(''); // State to store Min Salary
  const [maxSalary, setMaxSalary] = useState(''); // State to store Max Salary

  // Handle Min Salary change
  const handleMinSalaryChange = (e) => {
    setMinSalary(e.target.value);
  };

  // Handle Max Salary change
  const handleMaxSalaryChange = (e) => {
    setMaxSalary(e.target.value);
  };



  const handleSubmit = () => {
    // Ensure values are sent correctly to the parent component
    props.sortData([minSalary, maxSalary], props.name);
  };
  
  return (
    <Dropdown >
      <MenuButton  endDecorator={<ArrowDropDown />} onClick={() => { 
      setOpen(!open); 
    }}>{props.name}</MenuButton>
      <Menu sx={{ minWidth: 150, '--ListItemDecorator-size': '24px' }} open={open} >
        <ListDivider />
        {props.proptype == 1 && (
          <ListItem nested>
            <List aria-label="Font sizes">
              {props.sizes.map((item ,index) => (
                <MenuItem
                  key={item}
                  role="menuitemradio"
                
                  onClick={() => {
                    handleCheckboxClick(item)
                  }}
                >
                  <Checkbox label={item} size="md" sx={{ width: '100%' }} />
                </MenuItem>
          ))}
    </List>
        {/* Add the Filter button here */}
        <Button onClick={() =>
          {props.sortData(filterList,filterType)
          setOpen(false)
          setFilterList([])
          }} variant="outlined">
          Filter
        </Button>
      </ListItem>
)}

        {props.proptype == 0 && (
          <ListItem nested  sx={{ width: 280 }}>
            <List aria-label="Font sizes">
            <MenuItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Max Salary</FormLabel>
                <Input
                  name="maxSalary"
                  value={maxSalary} // Bind the value to the state
                  onChange={handleMaxSalaryChange} // Update state on change
                  placeholder="Enter Maximum Salary"
                />
              </FormControl>

                <FormControl sx={{ mb: 2 }}>
                  <FormLabel>Min Salary</FormLabel>
                  <Input
                    name="minSalary"
                    value={minSalary} // Bind the value to the state
                    onChange={handleMinSalaryChange} // Update state on change
                    placeholder="Enter Minimum Salary"
                  />
                </FormControl>

                <Box sx={{ position: 'relative', height: 60, padding: 2 }}>
                  <Button
                    sx={{ position: 'absolute', right: 20 }}
                    onClick={handleSubmit} // Call handleSubmit when clicked
                  >
                    Submit
                  </Button>
                </Box>
    </MenuItem>
             
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
