import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Done from '@mui/icons-material/Done';

const TimeSlots = ({ data, valueTimeSlots, setValueTimeSlots }) => {
  return (
    <div role="group" aria-labelledby="">
      <List
        orientation="horizontal"
        wrap
        sx={{
          '--List-gap': '8px',
          '--ListItem-radius': '20px',
          '--ListItem-minHeight': '32px',
          '--ListItem-gap': '4px',
        }}
      >
        {data.map((item, index) => (
          <ListItem key={item}>
            {valueTimeSlots.includes(item) && (
              <Done
                fontSize="md"
                color="primary"
                sx={{ ml: -0.5, zIndex: 2, pointerEvents: 'none' }}
              />
            )}

            <Checkbox
              size="sm"
              disableIcon
              overlay
              label={item}
              checked={valueTimeSlots.includes(item)}
              variant={valueTimeSlots.includes(item) ? 'soft' : 'outlined'}
              onChange={(event) => {
                if (event.target.checked) {
                  setValueTimeSlots((val) => [...val, item]);
                } else {
                  setValueTimeSlots((val) => val.filter((text) => text !== item));
                }
              }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: checked
                    ? {
                        border: '1px solid',
                        borderColor: 'primary.500',
                      }
                    : {},
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TimeSlots;
