import React from 'react';

import SnackbarProvider from 'hooks/useSnackbar';

import Router from './Router';

import Axios from 'middlewares/axios';

import './index.css';

import {SWRConfig} from 'swr';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (res, opt) =>
          Axios.get(res, {skipSnackbar: opt === 'skip-snackbar'}).then(
              (r) => r.data,
          ),
        focusThrottleInterval: 30000,
      }}
    >
      <SnackbarProvider>
        <Router
          className='flex flex-grow min-h-0'
        />
      </SnackbarProvider>
    </SWRConfig>
  );
}

export default App;
