import {styled} from '@mui/material/styles';

export const StyledRoot = styled('div')(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const StyledContent = styled('div')(({theme}) => ({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));
