import * as React from 'react';
import Slider from '@mui/joy/Slider';

function TimeSlider({ value, onChange }) {
  const marks = [
    { value: 0, label: '00:00' },
    { value: 1, label: '' },
    { value: 2, label: '' },
    { value: 3, label: '' },
    { value: 4, label: '' },
    { value: 5, label: '' },
    { value: 6, label: '06:00' },
    { value: 7, label: '' },
    { value: 8, label: '' },
    { value: 9, label: '' },
    { value: 10, label: '' },
    { value: 11, label: '' },
    { value: 12, label: '12:00' },
    { value: 13, label: '' },
    { value: 14, label: '' },
    { value: 15, label: '' },
    { value: 16, label: '' },
    { value: 17, label: '' },
    { value: 18, label: '18:00' },
    { value: 19, label: '' },
    { value: 20, label: '' },
    { value: 21, label: '' },
    { value: 22, label: '' },
    { value: 23, label: '23:00' },
  ];

  function valueText(value) {
    return `${value.toString().padStart(2, '0')}:00`;
  }

  return (
    <Slider
      size="sm"
      aria-label="Always visible"
      getAriaValueText={valueText}
      step={1}
      marks={marks}
      min={0}
      max={23}
      valueLabelDisplay="on"
      value={value}
      onChange={onChange}
      valueLabelFormat={valueText}
    />
  );
}

export default TimeSlider;
