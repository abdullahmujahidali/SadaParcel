import React from 'react';
// @mui
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {styled} from '@mui/material/styles';

export const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters
    {...props} />
))(({theme}) => ({
  ...theme.typography.body2,
  height: 48,
  marginTop: '10px',
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
