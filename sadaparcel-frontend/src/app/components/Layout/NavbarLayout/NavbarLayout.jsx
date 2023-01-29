import React from 'react';

import {Outlet} from 'react-router-dom';

import Navbar from './Navbar';

import {Main} from './styles';
import {StyledRoot} from './styles';

export default function NavbarLayout() {
  return (
    <StyledRoot>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
