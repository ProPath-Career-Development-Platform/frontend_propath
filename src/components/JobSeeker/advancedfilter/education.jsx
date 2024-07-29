import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

export default function Education() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' , flexWrap: 'wrap', gap: 3 }}>
      <Checkbox label="All" color="primary"  />
      <Checkbox label="High School" color="primary"  />
      <Checkbox label="Intermediate" color="primary" />
      <Checkbox label="Graduation" color="primary" />
      <Checkbox label="Master Degree" color="primary" />
      <Checkbox label="Bachelor Degree" color="primary"  />


      
    </Box>
  );
}