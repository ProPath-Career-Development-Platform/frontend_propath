import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function SalaryRadio() {
  return (
    <FormControl >
      
      <RadioGroup defaultValue="outlined" name="radio-buttons-group" sx = {{display : 'flex' , flexDirection : 'column'}}>
        <Radio value="$50 - $1000 " label="Freshers" variant="outlined" />
        <Radio value="$1000 - $2000 " label="Freshers" variant="outlined" />
        <Radio value="$2000 - $4000 " label="Freshers" variant="outlined" />
        <Radio value="$4000 - $6000 " label="Freshers" variant="outlined" />
        <Radio value="$8000 - $10000 " label="Freshers" variant="outlined" />
        <Radio value="$10000 - $15000 " label="Freshers" variant="outlined" />
        <Radio value="$15000 " label="Freshers" variant="outlined" />

      </RadioGroup>
    </FormControl>
  );
}
