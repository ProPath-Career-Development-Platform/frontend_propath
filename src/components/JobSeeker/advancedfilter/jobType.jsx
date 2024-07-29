import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function JobType() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' , flexWrap: 'wrap', gap: 3 }}>
      <Checkbox label="All" color="primary"  />
      <Checkbox label="Part Time" color="primary"  />
      <Checkbox label="Internship" color="primary" />
      <Checkbox label="Remote" color="primary" />
      <Checkbox label="Temporary" color="primary" />
      <Checkbox label="Contract Base" color="primary"  />


      
    </Box>
  );
}