import React from 'react';

import {Navigate} from 'react-router-dom';
import {useRoutes} from 'react-router-dom';


export default function Router() {
  const routes = useRoutes([
    {
      path: '*',
      element: <Navigate replace
        to='/404' />,
    },
  ]);

  return routes;
}
