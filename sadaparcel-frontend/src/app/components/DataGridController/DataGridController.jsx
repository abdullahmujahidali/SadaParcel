import React from 'react';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import {DataGrid} from '@mui/x-data-grid';
import {GridToolbar} from '@mui/x-data-grid';

import {BoxStyle} from './styles';
import {CustomStyles} from './styles';

import PropTypes from 'prop-types';


const DataGridController = (props) => {
  function CustomNoRowsOverlay() {
    return (
      <div className='flex h-full flex-col items-center pt-[6rem]'>
        <img alt='no-files'
          className='w-[20%]'
          src='/assets/images/no-data.svg' />
        <BoxStyle className='mt-[3.2rem] text-center'>No item found</BoxStyle>
      </div>
    );
  }

  return (
    <CustomStyles gridHeight>
      <Box
        sx={{height: `${props.customHeight ?? '85vh'}`, width: 'auto', pt: 2}}
      >
        <DataGrid
          autoPageSize
          columns={props.columns}
          components={{
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay,
            Toolbar: GridToolbar,
          }}
          disableSelectionOnClick
          loading={props.loading}
          rows={props.data ?? []}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </CustomStyles>
  );
};

export default DataGridController;

DataGridController.propTypes = {
  columns: PropTypes.array,
  customHeight: PropTypes.string,
  data: PropTypes.array,
  loading: PropTypes.bool,
};
