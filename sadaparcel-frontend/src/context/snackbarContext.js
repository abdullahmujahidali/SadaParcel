import React from 'react';

const SnackbarContext = React.createContext({
  snackbar: {
    text: '',
    severity: 'success',
    open: false,
    autoHideDuration: 3000,
    handleUndo: () => {},
    onClose: () => {},
  },
  setSnackbar: () => {},
});

SnackbarContext.displayName = 'SnackbarContext';

export default SnackbarContext;
