import {Options as SnackbarOptions} from 'hooks/useSnackbar';

export const triggerSnackbar = (options: SnackbarOptions) => {
  const event = new CustomEvent('snackbar', {
    detail: options,
  });

  window.dispatchEvent(event);
};

