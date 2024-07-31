import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function JobLevel() {
  return (
    <FormControl>
      
      <RadioGroup defaultValue="outlined" name="radio-buttons-group">
        <Radio value="Entry Level" label="Entry Level" variant="outlined" />
        <Radio value="Mid Level" label="Mid Level" variant="outlined" />
        <Radio value="Expert Level" label="Expert Level" variant="outlined" />
        
      </RadioGroup>
    </FormControl>
  );
}