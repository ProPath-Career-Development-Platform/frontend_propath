import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import TextField from '@mui/joy/TextField';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';

export default function AdvancedfilterSearch() {
  const [selectedWords, setSelectedWords] = React.useState([]);

  return (
    <Box sx = {{marginBottom : '15px' , maxWidth: '50%' }}>
      <Autocomplete
        multiple
        freeSolo
        id="tags-default"
        placeholder='Job Title Or Keyword'
        options={[]}
        value={selectedWords}
        onChange={(event, newValue) => setSelectedWords(newValue)}
        renderInput={(params) => (
          <TextField
           
            variant="outlined"
            placeholder="Type and select words"
          />
         
        )}
        sx = {{height : '60px'}}
        
      />
      {/* <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Selected Words:</Typography>
        {selectedWords.map((word, index) => (
          <Typography key={index}>{word}</Typography>
        ))}
      </Box> */}
    </Box>
  );
}
