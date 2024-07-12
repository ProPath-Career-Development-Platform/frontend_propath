
import * as React from 'react';
import { Outlet } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import {extendTheme} from '@mui/joy/styles';

import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';


const primary = {
  50: '#FDF7FF',
  100: '#F4EAFF',
  200: '#E1CBFF',
  300: '#C69EFF',
  400: '#A374F9',
  500: '#814DDE',
  600: '#5F35AE',
  700: '#452382',
  800: '#301761',
  900: '#1D0A42',
};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...primary,
          plainColor: `var(--joy-palette-primary-600)`,
          plainHoverBg: `var(--joy-palette-primary-100)`,
          plainActiveBg: `var(--joy-palette-primary-200)`,
          plainDisabledColor: `var(--joy-palette-primary-200)`,

          outlinedColor: `var(--joy-palette-primary-500)`,
          outlinedBorder: `var(--joy-palette-primary-200)`,
          outlinedHoverBg: `var(--joy-palette-primary-100)`,
          outlinedHoverBorder: `var(--joy-palette-primary-300)`,
          outlinedActiveBg: `var(--joy-palette-primary-200)`,
          outlinedDisabledColor: `var(--joy-palette-primary-100)`,
          outlinedDisabledBorder: `var(--joy-palette-primary-100)`,

          softColor: `var(--joy-palette-primary-600)`,
          softBg: `var(--joy-palette-primary-100)`,
          softHoverBg: `var(--joy-palette-primary-200)`,
          softActiveBg: `var(--joy-palette-primary-300)`,
          softDisabledColor: `var(--joy-palette-primary-300)`,
          softDisabledBg: `var(--joy-palette-primary}-)50`,

          solidColor: '#fff',
          solidBg: `var(--joy-palette-primary-500)`,
          solidHoverBg: `var(--joy-palette-primary-600)`,
          solidActiveBg: `var(--joy-palette-primary-700)`,
          solidDisabledColor: `#fff`,
          solidDisabledBg: `var(--joy-palette-primary-200)`,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          ...primary,
          plainColor: `var(--joy-palette-primary-300)`,
          plainHoverBg: `var(--joy-palette-primary-800)`,
          plainActiveBg: `var(--joy-palette-primary-700)`,
          plainDisabledColor: `var(--joy-palette-primary-800)`,

          outlinedColor: `var(--joy-palette-primary-200)`,
          outlinedBorder: `var(--joy-palette-primary-700)`,
          outlinedHoverBg: `var(--joy-palette-primary-800)`,
          outlinedHoverBorder: `var(--joy-palette-primary-600)`,
          outlinedActiveBg: `var(--joy-palette-primary-900)`,
          outlinedDisabledColor: `var(--joy-palette-primary-800)`,
          outlinedDisabledBorder: `var(--joy-palette-primary-800)`,

          softColor: `var(--joy-palette-primary-200)`,
          softBg: `var(--joy-palette-primary-900)`,
          softHoverBg: `var(--joy-palette-primary-800)`,
          softActiveBg: `var(--joy-palette-primary-700)`,
          softDisabledColor: `var(--joy-palette-primary-800)`,
          softDisabledBg: `var(--joy-palette-primary-900)`,

          solidColor: `#fff`,
          solidBg: `var(--joy-palette-primary-600)`,
          solidHoverBg: `var(--joy-palette-primary-700)`,
          solidActiveBg: `var(--joy-palette-primary-800)`,
          solidDisabledColor: `var(--joy-palette-primary-700)`,
          solidDisabledBg: `var(--joy-palette-primary-900)`,
        },
      },
    },
  },
});



export default function JoyOrderDashboardTemplate({user}) {
    return (
      <CssVarsProvider theme={theme} disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Header />
          <Sidebar actor={{user}} />

          <Outlet/> {/*Renders the child route's element, if there is one.*/}
          
        </Box>
      </CssVarsProvider>
    );
  }