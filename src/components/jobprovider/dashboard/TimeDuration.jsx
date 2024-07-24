import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

function TimeDuration({ value, onChange }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
      <RadioGroup
        size="sm"
        orientation="horizontal"
        aria-labelledby="segmented-controls-example"
        name="justify"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        sx={{
          minHeight: 48,
          padding: '4px',
          borderRadius: '12px',
          bgcolor: 'neutral.softBg',
          '--RadioGroup-gap': '4px',
          '--Radio-actionRadius': '8px',
        }}
      >
        {[15, 30, 45, 60].map((item) => (
          <Radio
            key={item}
            color="neutral"
            value={item}
            disableIcon
            label={`${item} min`}
            variant="plain"
            sx={{
              px: 2,
              alignItems: 'center',
              ...(value === item && {
                color: 'white',
              }),
            }}
            slotProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: 'primary.600',
                    boxShadow: 'sm',
                    '&:hover': {
                      bgcolor: 'primary.600',
                    },
                  }),
                },
              }),
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

export default TimeDuration;
