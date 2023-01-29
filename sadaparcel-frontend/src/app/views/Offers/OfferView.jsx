import React from 'react';
import {useCallback} from 'react';
import {useMemo} from 'react';
import {useState} from 'react';

import useSWR from 'swr';

import Container from '@mui/material/Container';
import {GridActionsCellItem} from '@mui/x-data-grid';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AddEditForm from './AddEditForm';
import CreateModal from 'components/Modals/CreateModal';
import DataGridController from 'components/DataGridController/DataGridController';
import DeleteDialog from 'components/DeleteDialog/DeleteDialog';

import {GRID_COLUMNS} from './Constants';
import {ITEM} from 'constants/restEndpoints';
import {StyledContent} from './styles';
import {updateDiscount} from './api';


export default function OfferView() {
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [row, setRow]= useState({});
  const [dialogOpen, setDialogOpen]= useState(false);
  const {data: itemList, mutate: itemListMutate} = useSWR(ITEM.ALL_ITEM);

  const updateItemDiscount = useCallback(
      (item) => () => {
        updateDiscount(item.id, {'isDiscount': !item.isDiscount}).then(() => {
          setOpen(false);
          itemListMutate();
        });
        setDialogOpen(false);
      },
      [],
  );

  const propsColumns = useMemo(
      () => [
        ...GRID_COLUMNS,
        {
          headerName: 'Actions',
          field: 'actions',
          type: 'actions',
          align: 'center',
          width: 210,
          key: 4,
          getActions: (params) => [
            <GridActionsCellItem
              icon={
                <Tooltip arrow
                  placement='top'
                  title='Offer'>
                  <LocalOfferIcon />
                </Tooltip>}
              key={1}
              label='Edit'
              onClick={()=>{
                setRow(params.row);
                setDialogOpen(true);
              }}
            />,
          ],
        },
      ],
      [updateItemDiscount],
  );
  return (

    <Container className='!mt[-18px]'
      maxWidth='xl'>
      <StyledContent>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant='h4'>Offers</Typography>
        </div>
        <CreateModal
          editItem={editItem}
          open={open}
          setEditItem={setEditItem}
          setOpen={setOpen}
        >
          <Typography
            component='h2'
            id='transition-modal-title'
            sx={{mb: 2}}
            variant='h6'
          >
            {editItem.id ? 'Edit Item' : 'Add Item'}
          </Typography>
          <AddEditForm
            editItem={editItem}
            itemListMutate={itemListMutate}
            setOpen={setOpen}
          />
        </CreateModal>
        <DataGridController
          columns={propsColumns}
          data={itemList}
        />
        <DeleteDialog
          cancelBtnText='No'
          confirmBtnText='Yes'
          deleteText='This will add 10% discount to this product'
          disabled={false}
          onClose={()=>{
            setDialogOpen(false);
          }}
          onSubmit={updateItemDiscount(row)}
          open={dialogOpen}
          switchBtnColor
        />
      </StyledContent>
    </Container>
  );
}
