import React from 'react';
import {useNavigate} from 'react-router-dom';

import Button from '@mui/material/Button';


const NotFound = () =>{
  let navigate = useNavigate();

  const routeToHome = () =>{
    let path = `/inventory`;
    navigate(path);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <img alt='Permission Denied'
        className='w-[30%]'
        src='/assets/images/404.svg' />
      <Button
        color='secondary'
        onClick={routeToHome}
        size='small'
        type='submit'
        variant='contained'
      >
        Redirect to home
      </Button>
    </div>
  );
};


export default NotFound;
