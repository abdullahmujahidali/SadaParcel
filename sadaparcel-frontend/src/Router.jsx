import React from 'react';

import {Navigate} from 'react-router-dom';
import {useRoutes} from 'react-router-dom';

import Navbar from 'components/Layout/NavbarLayout';
import NotFound from 'components/NotFound/NotFound';

import SimpleLayout from 'components/Layout/NormalLayout';

import ItemView from 'views/Item/ItemView';
import OfferView from 'views/Offers/OfferView';


export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {element: <Navigate to='/inventory' />, index: true},
        {path: 'inventory', element: <ItemView />},
        {path: 'offers', element: <OfferView />},
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        {element: <Navigate to='/inventory' />, index: true},
        {path: '404', element: <NotFound />},
        {path: '*', element: <Navigate to='/404' />},
      ],
    },
    {
      path: '*',
      element: <Navigate replace
        to='/404' />,
    },
  ]);

  return routes;
}
