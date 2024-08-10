import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';

export default function RadioButton({ pages, setPageNumber , setCurrentPage, currentPage}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleMenuItemClick = (index, number) => {
    setPageNumber(number);
    setSelectedIndex(index);

    if(currentPage > 1){
      setCurrentPage(1);
    }


  };

  return (
    <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>
        {pages} Events Per Page
      </MenuButton>
      <Menu>
        <MenuItem selected={selectedIndex === 0} onClick={() => handleMenuItemClick(0, 5)}>
          5 Per Page
        </MenuItem>
        <MenuItem selected={selectedIndex === 1} onClick={() => handleMenuItemClick(1, 10)}>
          10 Per Page
        </MenuItem>
        <MenuItem selected={selectedIndex === 2} onClick={() => handleMenuItemClick(2, 15)}>
          15 Per Page
        </MenuItem>
        <MenuItem selected={selectedIndex === 3} onClick={() => handleMenuItemClick(3, 20)}>
          20 Per Page
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
