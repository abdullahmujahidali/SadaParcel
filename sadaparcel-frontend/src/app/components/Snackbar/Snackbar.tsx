import React, {ComponentProps} from 'react';

import {
  Alert,
  SnackbarContent,
  Snackbar as MuiSnackbar,
  Button,
} from '@mui/material';

type SnackbarProps = ComponentProps<typeof MuiSnackbar> & {
  onUndo?: () => void;
  severity?: ComponentProps<typeof Alert>['severity'];
};

export default function Snackbar({
  onUndo,
  severity,
  onClose,
  open,
  children,
  ...props
}: SnackbarProps) {
  return (
    <MuiSnackbar onClose={onClose}
      open={open}
      {...props}>
      <SnackbarContent
        message={
          <Alert
            action={
              onUndo ? (
                <Button color='inherit'
                  onClick={onUndo}
                  size='small'>
                  UNDO
                </Button>
              ) : undefined
            }
            onClose={(e) => onClose?.(e, 'escapeKeyDown')}
            severity={severity}
          >
            {children}
          </Alert>
        }
      />
    </MuiSnackbar>
  );
}
