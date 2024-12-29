import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(){
  return (
    <Typography
      variant="body2"
      align="center"
      
      sx={[
        {
          color: 'text.primary', mt : 1
        } 
        
      ]}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://google.com.mx/">
        Tucano Software
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}