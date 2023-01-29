import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import account from './fakeAccountData';
import NavSection from './NavSection';

import {StyledImageContainer} from './styles';

import {navConfig} from './NavConfig';

import PropTypes from 'prop-types';

export default function Navbar() {
  const renderContent = (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className='mb-[30px]'>
        <StyledImageContainer>
          <img alt='photoURL'
            className='w-[30%]'
            src={account.cropLogo} />
        </StyledImageContainer>
        <Typography
          className='px-[48px]'
          variant='h3'>SadaParcel</Typography>
      </div>
      <NavSection
        data={navConfig}
        sx={{flex: 1}}
      />
    </Box>
  );

  return (
    <Box
      component='nav'
      sx={{
        width: 280,
      }}
    >
      <Drawer
        open
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'background.default',
            borderRightStyle: 'dashed',
          },
        }}
        variant='permanent'
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}

Navbar.propTypes = {
  onCloseNav: PropTypes.func,
  openNav: PropTypes.bool,
};
