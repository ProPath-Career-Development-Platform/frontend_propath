import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export default function ExperienceRadio() {
  return (
    <FormControl>
      
      <RadioGroup defaultValue="outlined" name="radio-buttons-group">
        <Radio value="Freshers" label="Freshers" variant="outlined" />
        <Radio value="1-2 Years" label="1-2 Years" variant="outlined" />
        <Radio value="2-4 Years" label="2-4 Years" variant="outlined" />
        <Radio value="4-6 Years" label="4-6 Years" variant="outlined" />
        <Radio value="6-8 Years" label="6-8 Years" variant="outlined" />
        <Radio value="8-10 Years" label="8-10 Years" variant="outlined" />
        <Radio value="10-15 Years" label="10-15 Years" variant="outlined" />
        <Radio value="15+ Years" label="15+ Years" variant="outlined" />
      </RadioGroup>
    </FormControl>
  );
}
