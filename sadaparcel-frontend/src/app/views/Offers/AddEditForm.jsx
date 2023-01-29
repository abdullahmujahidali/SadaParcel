import React from 'react';

import {Button} from '@mui/material';
import Stack from '@mui/material/Stack';

import {Form} from 'components/form';
import {MuiTextField} from 'components/form';

import {addItem} from './api';
import {updateItemInfo} from './api';

import PropTypes from 'prop-types';

const AddEditForm = ({editItem, setOpen, itemListMutate}) => {
  const onSubmit = (val) => {
    (editItem?.id ? updateItemInfo(editItem.id, val) : addItem(val)).then(
        () => {
          setOpen(false);
          itemListMutate();
        },
    );
  };

  return (
    <Form defaultValues={editItem}
      onSubmit={onSubmit}>
      <Stack spacing={3}>
        <MuiTextField
          label='Title'
          name='title'
          required
          size='small'
        />
        <MuiTextField
          label='Quantity'
          name='quantity'
          required
          size='small'
        />
        <MuiTextField
          label='Price'
          name='price'
          required
          size='small'
        />
        <Button
          color='secondary'
          size='small'
          type='submit'
          variant='contained'
        >
          Save Item
        </Button>
      </Stack>
    </Form>
  );
};

AddEditForm.propTypes = {
  editItem: PropTypes.object,
  itemListMutate: PropTypes.func,
  setOpen: PropTypes.func,
};

export default AddEditForm;
