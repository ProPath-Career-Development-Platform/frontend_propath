import React, { useState } from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const JSSort = ({ sizes, initial, onChange }) => {
  const [value, setValue] = useState(initial);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };

  return (
    <div>
      <Select
        value={value}
        indicator={<KeyboardArrowDownIcon />}
        sx={{ fontWeight: 500 }}
        onChange={handleChange}
      >
        {sizes.map((size, index) => (
          <Option key={index} value={size}>
            {size}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default JSSort;
