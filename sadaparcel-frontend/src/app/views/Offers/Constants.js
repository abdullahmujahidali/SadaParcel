export const GRID_COLUMNS = [
  {
    headerName: 'Title',
    field: 'title',
    type: 'string',
    flex: 1,
    id: 1,
    key: 0,
  },
  {
    headerName: 'Quantity',
    field: 'quantity',
    width: 120,
    type: 'integer',
    key: 1,
    id: 2,
  },
  {
    headerName: 'Offer',
    field: 'isDiscount',
    width: 120,
    type: 'booleans',
    key: 1,
    id: 2,
  },
  {
    headerName: 'Price',
    field: 'price',
    width: 120,
    type: 'double',
    key: 1,
    id: 2,
    valueFormatter: (params) => {
      return '$' + params.value;
    },
  },
];

export const ACTION_COLUMN = {
  headerName: 'Actions',
  field: 'actions',
  type: 'actions',
  align: 'center',
  width: 250,
  key: 4,
  id: 5,
};
