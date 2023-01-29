import type {Components} from '@mui/material/styles/components';

export default {
  styleOverrides: {
    root: {
      boxShadow: 'none',
      background: 'none',
    },
    message: {
      width: '100%',
      minWidth: '23rem',
      maxWidth: '34rem',
    },
  },
} as Components['MuiSnackbarContent'];
