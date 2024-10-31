import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Box, Typography } from '@mui/joy';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const LocationSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (inputValue === '') {
      setOptions([]);
      return;
    }

    const fetchPlaces = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputValue}&types=(cities)&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.predictions) {
        setOptions(data.predictions.map((prediction) => prediction.description));
      }
    };
   

    fetchPlaces();
  }, [inputValue]);

  return (
    
    <Box sx={{maxWidth : '50%' , position: 'relative' , marginBottom : '15px'}}>
      
      
      <Autocomplete
        id="location-search"
        placeholder='Search for a Location'
        options={options}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        onChange={(event, newValue) => setSelectedLocation(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
     
            variant="outlined"
            placeholder="Search for a location"
          />
        )}
        sx = {{ height : '60px'}}
      />
      {selectedLocation && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Selected Location:</Typography>
          <Typography>{selectedLocation}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default LocationSearch;
