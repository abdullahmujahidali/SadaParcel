import React from 'react';

import Grid from '@mui/material/Grid';
import MuiDialogActions from '@mui/material/DialogActions';

import {CustomButton} from './styles';
import {CustomDialog} from './styles';
import {StyledDialogContent} from './styles';
import {StyledTypography} from './styles';

import PropTypes from 'prop-types';

function DeleteDialog(props) {
  const {
    cancelBtnText,
    confirmBtnText,
    deleteText,
    disabled,
    onClose,
    onSubmit,
    open,
  } = props;

  return (
    <CustomDialog
      onClose={onClose}
      open={open}
    >
      <StyledDialogContent>
        <StyledTypography
          centertext={1}
          color='primary'
          variant='body1'
        >
          {deleteText}
        </StyledTypography>
      </StyledDialogContent>
      {cancelBtnText && onSubmit && (
        <MuiDialogActions>
          <Grid container
            justifyContent='center'>
            {cancelBtnText && (
              <Grid item>
                <CustomButton
                  color='secondary'
                  onClick={onClose}
                  variant='outlined'
                >
                  {cancelBtnText}
                </CustomButton>
              </Grid>
            )}
            {onSubmit && (
              <Grid item>
                <CustomButton
                  color={!switchBtnColor ? 'error' : 'secondary'}
                  disabled={disabled}
                  margin={1}
                  onClick={onSubmit}
                  variant='contained'
                >
                  {confirmBtnText}
                </CustomButton>
              </Grid>
            )}
          </Grid>
        </MuiDialogActions>
      )}
    </CustomDialog>
  );
}

DeleteDialog.propTypes = {
  cancelBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  deleteText: PropTypes.string,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

DeleteDialog.defaultProps = {
  cancelBtnText: 'Cancel',
  confirmBtnText: 'Confirm Delete',
  disabled: false,
};

export default DeleteDialog;
