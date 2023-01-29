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
    additionalText,
    cancelBtnText,
    confirmBtnText,
    deleteText,
    disabled,
    heading,
    imgAltText,
    imgSrc,
    onClose,
    onSubmit,
    open,
    style,
    switchBtnColor,
  } = props;

  return (
    <CustomDialog
      alt={imgSrc ? 0 : 1}
      dialogcontent={!style ? 1 : 0}
      onClose={onClose}
      open={open}
    >
      <StyledDialogContent alt={imgSrc ? 0 : 1}>
        {imgSrc && (
          <div className='mb-[3.2rem] flex justify-center'>
            <img alt={imgAltText}
              src={imgSrc} />
          </div>
        )}
        <StyledTypography
          centertext={1}
          color='primary'
          headingmargin={style ? 1 : 0}
          variant='subtitle1'
        >
          {heading}
        </StyledTypography>
        <StyledTypography
          centertext={1}
          color='primary'
          marginbottom={style ? 1 : 0}
          variant='body1'
        >
          {deleteText}
        </StyledTypography>
        {additionalText && (
          <StyledTypography centertext={1}
            color='error'
            variant='body1'>
            {additionalText}
          </StyledTypography>
        )}
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
                  width={style ? 1 : 0}
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
                  width={style ? 1 : 0}
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
  additionalText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  deleteText: PropTypes.string,
  disabled: PropTypes.bool,
  heading: PropTypes.string,
  imgAltText: PropTypes.string,
  imgSrc: PropTypes.string,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  open: PropTypes.bool.isRequired,
  style: PropTypes.bool,
  switchBtnColor: PropTypes.bool,
};

DeleteDialog.defaultProps = {
  cancelBtnText: 'Cancel',
  confirmBtnText: 'Confirm Delete',
  heading: '',
  disabled: false,
  style: false,
};

export default DeleteDialog;
