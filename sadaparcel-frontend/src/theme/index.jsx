import React from 'react';
import {useMemo} from 'react';

import {createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import {StyledEngineProvider} from '@mui/material/styles';

import palette from './palette';
import shadows from './shadows';
import typography from './typography';

import GlobalStyles from './globalStyles';

import MuiSnackbar from '../constants/MuiTheme/Snackbar';
import MuiSnackbarContent from '../constants/MuiTheme/SnackbarContent';

import customShadows from './customShadows';

import componentsOverride from './overrides';

import PropTypes from 'prop-types';

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({children}) {
  const themeOptions = useMemo(
      () => ({
        palette,
        shape: {borderRadius: 6},
        typography,
        shadows: shadows(),
        customShadows: customShadows(),
      }),
      [],
  );

  const theme = createTheme(themeOptions);
  theme.components = {
    ...componentsOverride(theme),
    MuiSnackbar,
    MuiSnackbarContent,
  };

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
