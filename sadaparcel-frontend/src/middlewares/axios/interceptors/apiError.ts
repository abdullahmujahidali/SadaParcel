import AxiosInstance from 'middlewares/axios/instance';
import {triggerSnackbar} from 'middlewares/axios/utils';

const API_ERROR_MESSAGE = {
  STATUS_CODE_400: 'The server could not understand your request!',
  STATUS_CODE_401: 'We’re sorry, we could not authenticate your identity!',
  STATUS_CODE_403: 'Something went wrong',
  STATUS_CODE_404: 'We’re sorry, we could not find what you requested for!',
  STATUS_CODE_413: 'The file uploaded is too big!',
  STATUS_CODE_500: 'We’re sorry, we could not find the server!',
  STATUS_CODE_UNKNOWN: 'Oops, Something Went Wrong!',
};


AxiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      if (err.config.skipSnackbar) {
        throw err;
      }
      let errorText;
      if (!err.response || !err.request) {
        errorText = 'Unable to connect to server';
      } else {
        switch (err.response.status) {
          case 400:
            errorText = API_ERROR_MESSAGE.STATUS_CODE_400;
            break;
          case 401:
            errorText = API_ERROR_MESSAGE.STATUS_CODE_401;
            break;
          case 403:
            errorText = API_ERROR_MESSAGE.STATUS_CODE_403;
            break;
          case 404:
            errorText = API_ERROR_MESSAGE.STATUS_CODE_404;
            break;
          case 413:
            errorText = API_ERROR_MESSAGE.STATUS_CODE_403;
            break;
          default:
            errorText =
            err.response.status >= 500 ?
              API_ERROR_MESSAGE.STATUS_CODE_500 :
              API_ERROR_MESSAGE.STATUS_CODE_UNKNOWN;
            break;
        }
      }

      triggerSnackbar({
        body: errorText,
        severity: 'error',
      });
      throw err;
    },
);
