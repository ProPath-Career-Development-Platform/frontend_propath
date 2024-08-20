import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import DOMPurify from 'dompurify';





function RenderRichText({text}) {

    const cleanHTML = DOMPurify.sanitize(text);
  return (
           <Typography

           sx={{
            '& h1': {
              color: 'var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))',
              fontSize: 'var(--joy-fontSize-xl4, 2.25rem)',
              fontWeight: 'var(--joy-fontWeight-xl, 700)',
              lineHeight: 'var(--joy-lineHeight-xs, 1.33334)',
              margin: '1.5rem 0',
            },
            '& h2': {
              color: 'var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))',
              fontSize: 'var(--joy-fontSize-xl3, 1.875rem)',
              fontWeight: 'var(--joy-fontWeight-xl, 700)',
              lineHeight: 'var(--joy-lineHeight-xs, 1.33334)',
              margin: '1.25rem 0',
            },
            
            '& p': {
              fontSize: 'var(--joy-fontSize-md, 1rem)',
              lineHeight: 'var(--joy-lineHeight-md, 1.5)',
              color: 'var(--joy-palette-text-secondary, var(--joy-palette-neutral-700, #32383E))',
              margin: '0.5rem 0',
            },
            '& ul': {
              listStyleType: 'disc',
              marginLeft: '1.5rem',
            },
            '& ol': {
              listStyleType: 'decimal',
              marginLeft: '1.5rem',
            },
            '& li': {
              fontSize: 'var(--joy-fontSize-md, 1rem)',
              lineHeight: 'var(--joy-lineHeight-md, 1.5)',
              margin: '0.25rem 0',
            },
            '& a': {
              color: 'var(--joy-palette-primary-500)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
          
        >
           
            <Box dangerouslySetInnerHTML={{ __html: cleanHTML }}/> 
           
        </Typography>
       
  );
}

export default RenderRichText;
