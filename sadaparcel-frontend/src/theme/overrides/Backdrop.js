import {alpha} from '@mui/material/styles';

export function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.1),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}
