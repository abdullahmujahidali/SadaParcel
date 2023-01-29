import Axios from 'middlewares/axios';
import {ITEM} from 'constants/restEndpoints';

import {urlWithArgs} from '../../../utils/index.ts';


export const addItem = (value) => {
  return Axios.post(ITEM.ALL_ITEM, value);
};

export const updateItemInfo = (id, value) => {
  return Axios.put(
      urlWithArgs(ITEM.GET_ITEM, {'itemId': id}),
      value,
  );
};

export const deleteItem = (id, value) => {
  return Axios.delete(
      urlWithArgs(ITEM.GET_ITEM, {'itemId': id}),
      value,
  );
};

export const updateDiscount = (id, value) => {
  return Axios.patch(
      urlWithArgs(ITEM.GET_ITEM, {'itemId': id}),
      value,
  );
};
