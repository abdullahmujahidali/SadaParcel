import React from 'react';

import {NavLink as RouterLink} from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import {StyledNavItem} from './styles';
import {StyledNavItemIcon} from './styles';

import PropTypes from 'prop-types';

export default function NavSection({data = [], ...other}) {
  return (
    <Box {...other}>
      <List disablePadding
        sx={{p: 1}}>
        {data.map((item) => (
          <NavItem item={item}
            key={item.title} />
        ))}
      </List>
    </Box>
  );
}

function NavItem({item}) {
  const {title, path, icon, info} = item;

  return (
    <StyledNavItem
      component={RouterLink}
      sx={{
        '&.active': {
          color: 'text.primary',
          backgroundColor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
      to={path}
    >
      <StyledNavItemIcon>{icon}</StyledNavItemIcon>

      <ListItemText disableTypography
        primary={title}
        sx={{}} />

      {info}
    </StyledNavItem>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

NavSection.propTypes = {
  data: PropTypes.array,
};
