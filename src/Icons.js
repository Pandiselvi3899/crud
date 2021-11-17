import * as React from 'react';
import Box from '@mui/material/Box';


export default function Icons() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    ></Box>);
}