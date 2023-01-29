import React from 'react';

import type {Components} from '@mui/material/styles/components';
import {Slide} from '@mui/material';

import * as spacing from 'constants/spacing';

export default {
  defaultProps: {
    autoHideDuration: 3000,
    anchorOrigin: {horizontal: 'right', vertical: 'bottom'},
    TransitionComponent: (props) => <Slide {...props}
      direction='up' />,
  },
  styleOverrides: {
    anchorOriginBottomRight: {
      bottom: `${spacing.spacingl} !important`,
      right: `${spacing.spacingl} !important`,
    },
  },
} as Components['MuiSnackbar'];
