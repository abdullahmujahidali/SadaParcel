import {styled} from '@mui/material/styles';

const APP_BAR_DESKTOP = 64;

export const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

export const Main = styled('div')(({theme}) => ({
  flexGrow: 1,
  minHeight: '100%',
  paddingTop: APP_BAR_DESKTOP,
}));
