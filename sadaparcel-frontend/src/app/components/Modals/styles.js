import Box from '@mui/material/Box';

import {styled} from '@mui/material/styles';

export const StyledBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  backgroundColor: theme.palette.background.paper,
  padding: '30px',
  outline: 'none',
  borderRadius: '10px',
}));
