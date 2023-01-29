import React, {
  ComponentProps,
  createContext,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Snackbar from 'components/Snackbar';
import {SnackbarCloseReason} from '@mui/material';

export interface Options {
    onClose?: ComponentProps<typeof Snackbar>['onClose'];
    onUndo?: ComponentProps<typeof Snackbar>['onUndo'];
    body: ReactNode;
    severity?: ComponentProps<typeof Snackbar>['severity'];
  }

const SnackbarContext = createContext<(options: Options) => void>(
    () => undefined,
);

export const useSnackbar = () => useContext(SnackbarContext);

export default function SnackbarProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);
  const [{body, onClose, ...options}, setOptions] = useState<Options>({
    body: '',
  });

  const openSnackbar = useCallback((opt: Options) => {
    setOptions(opt);
    setOpen(true);
  }, []);

  const handleClose = useCallback(
      (e: SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
          return;
        }

        onClose?.(e, reason);
        setOpen(false);
      },
      [onClose],
  );

  useEffect(() => {
    const callback = (event: CustomEvent<Options>) => {
      setOptions(event.detail);
      setOpen(true);
    };

    window.addEventListener('snackbar', callback as any);
    return () => window.removeEventListener('snackbar', callback as any);
  }, []);

  return (
    <>
      <SnackbarContext.Provider value={openSnackbar}>
        {children}
      </SnackbarContext.Provider>

      <Snackbar onClose={handleClose}
        open={open}
        {...options}>
        {body as ReactElement}
      </Snackbar>
    </>
  );
}

