import {memo} from 'react';
import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';

import {StyledBox} from './styles';

import PropTypes from 'prop-types';

function CreateModal({
  open,
  setOpen,
  editItem,
  setEditItem,
  customStyle,
  children,
}) {
  const handleClose = () => {
    setOpen(false);
    editItem && setEditItem(false);
  };
  return (
    <>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
        closeAfterTransition
        onClose={handleClose}
        open={open}
      >
        <StyledBox className={customStyle}>{children}</StyledBox>
      </Modal>
    </>
  );
}

CreateModal.defaultPropTypes = {
  customStyle: '',
};

CreateModal.propTypes = {
  children: PropTypes.any,
  customStyle: PropTypes.string,
  editItem: PropTypes.any,
  header: PropTypes.string,
  open: PropTypes.any,
  setEditItem: PropTypes.func,
  setOpen: PropTypes.func,
};

export default memo(CreateModal);
