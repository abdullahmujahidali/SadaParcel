import {Box} from '@mui/material';
import {styled} from '@mui/system';

export const BoxStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'rowId',
})(({theme, rowId}) => ({
  ...(rowId && {
    [`& .redirectFromRow-${rowId}`]: {
      background: theme.palette.layout.greenishgrey + '!important',
      border: '1rem solid' + theme.palette.secondary.main,
    },
  }),
  width: '100%',
}));

export const CustomStyles = styled('div', {
  shouldForwardProp: (prop) => prop !== 'gridHeight',
})(({theme}) => ({

  '& .MuiDataGrid-virtualScrollerContent': {
    paddingTop: '0rem',
  },
  '& .MuiDataGrid-main .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-main .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },

  '& .MuiDataGrid-toolbarContainer ': {
    marginBottom: '12px',
  },

  '& .MuiDataGrid-main  .MuiDataGrid-cell:focus': {
    outline: 'none',
  },

  '& .MuiButtonBase-root': {
    '& .MuiCheckbox-colorPrimary': {
      'display': 'none',
      'color': '#e4f4f0',
      '& .MuiCheckbox-indeterminate': {
        color: '#e4f4f0',
      },
    },
    '& .Mui-checked': {
      'color': '#e4f4f0',
      '& .MuiCheckbox-indeterminate': {
        color: '#e4f4f0',
      },
    },
    '& .MuiCheckbox-root': {
      'color': '#e4f4f0',
      '& .Mui-checked': {
        color: '#e4f4f0',
      },
      '& .MuiCheckbox-indeterminate': {
        color: '#e4f4f0',
      },
    },
  },
  '& .MuiDataGrid-root': {
    '& .Mui-checked': {
      color: '#19AA86',
    },
    'height': '100%',
    'border': 'none',
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: '#ffffff !important',
    },
    '& .MuiDataGrid-row': {
      '&:nth-of-type(odd)': {
      },
      '&.Mui-selected': {
        'backgroundColor': '#e4f4f0',
        'boxShadow': `4px 0px 0px 0px ${'#fffff'} inset`,
        '&:hover': {
          backgroundColor: '#e4f4f0',
        },
        '& .MuiButtonBase-root': {
          color: '#19AA86',
        },
      },
      '& .MuiDataGrid-cell': {
        background: 'none',
      },
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: '#ffffff !important',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      padding: '0 0.125rem',
    },
    '& .customCellClass': {
      padding: '0',
    },
    '& .MuiDataGrid-pinnedColumns': {
      'boxShadow': 'none',
      '& .MuiDataGrid-cell--withRenderer': {
        padding: '0',
      },
    },
  },
}));

export const buttonStyle = {
  menu: {
    transform: 'translateY(0.5rem)',
  },
};
