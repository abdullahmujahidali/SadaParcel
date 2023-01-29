import React from 'react';
import {useCallback} from 'react';
import {useMemo} from 'react';
import {useState} from 'react';

import useSWR from 'swr';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; ;
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {GridActionsCellItem} from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AddEditForm from './AddEditForm';
import CreateModal from 'components/Modals/CreateModal';
import DataGridController from 'components/DataGridController/DataGridController';
import DeleteDialog from 'components/DeleteDialog/DeleteDialog';
import {GRID_COLUMNS} from './Constants';
import {ITEM} from 'constants/restEndpoints';

import Axios from 'middlewares/axios';
import {StyledContent} from './styles';
import {urlWithArgs} from '../../../utils/index.ts';


export default function ItemView() {
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [dialogOpen, setDialogOpen]= useState(false);
  const [itemId, setItemId] = useState('');
  const {data: itemList, mutate: itemListMutate} = useSWR(ITEM.ALL_ITEM);

  const getItemData = (data, _id) => {
    return data?.find((item) => item.id == _id);
  };
  const editItemInfo = useCallback(
      (item) => () => {
        setEditItem( item);
        setOpen(true);
      },
      [],
  );

  const openDialog = () => {
    setDialogOpen(true);
  };

  const handleDeleteItem = () => {
    Axios.delete(
        urlWithArgs(ITEM.GET_ITEM, {'itemId': itemId}),
    ).then(() => itemListMutate());
    setDialogOpen(false);
  };

  const deleteItem = useCallback(
      (id) => () => {
        const del = getItemData(itemList, id);
        setItemId(del.id);
        openDialog(true);
      },
      [itemList],
  );

  const handleOpen = () => setOpen(true);

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
                  title='Edit'>
                  <EditIcon />
                </Tooltip>}
              key={1}
              label='Edit'
              onClick={editItemInfo(params.row)}
            />,
            <GridActionsCellItem
              icon={
                <Tooltip arrow
                  placement='top'
                  title='Delete'>
                  <DeleteOutlineOutlinedIcon />
                </Tooltip>}
              key={1}
              label='Delete'
              onClick={deleteItem(params.id)}
            />,
          ],
        },
      ],
      [editItemInfo, deleteItem],
  );
  return (

    <Container className='!mt[-18px]'
      maxWidth='xl'>
      <StyledContent>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant='h4'>Inventory</Typography>
          <Button
            color='secondary'
            onClick={handleOpen}
            size='medium'
            startIcon={<AddIcon />}
            type='submit'
            variant='contained'
          >
              Add Item
          </Button>
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
          deleteText='Are you sure you want to remove this item'
          disabled={false}
          onClose={()=>{
            setDialogOpen(false);
          }}
          onSubmit={handleDeleteItem}
          open={dialogOpen}
        />
      </StyledContent>
    </Container>
  );
}
