import * as React from 'react';
import {Rating} from '@mui/joy';
import Stack from '@mui/joy/Stack';

export default function RatingSize() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="sm" /> {/* small size in Joy UI */}
      <Rating name="size-medium" defaultValue={2} size="md" /> {/* medium size in Joy UI */}
      <Rating name="size-large" defaultValue={2} size="lg" /> {/* large size in Joy UI */}
    </Stack>
  );
}
