import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MuiDialogContent from '@mui/material/DialogContent';
import styled from '@mui/system/styled';

import Typography from '@mui/material/Typography';

export const CustomDialog = styled(Dialog, {
  shouldForwardProp: (prop) =>
    prop !== 'alt' && prop !== 'styling' && prop !== 'dialogcontent',
})(({theme, alt, styling, dialogcontent}) => ({
  ...(alt && {
    '& .MuiDialogContent-root': {
      padding: theme.spacing(7) + ' ' + theme.spacing(5),
    },
  }),
  ...(styling && {
    '& .MuiPaper-root': {
      width: '48rem',
      height: '199px',
    },
    '& .MuiDialogActions-root': {
      paddingBottom: '40px',
    },
  }),
  ...(dialogcontent && {
    '& .MuiDialog-paperWidthSm': {
      maxWidth: '100%',
    },
    '& .MuiDialogActions-root': {
      paddingBottom: theme.spacing(5),
    },
    '& .MuiDialogContent-root': {
      padding: theme.spacing(5) + ' ' + theme.spacing(7),
    },
  }),
}));

export const StyledDialogContent = styled(MuiDialogContent, {
  shouldForwardProp: (prop) => prop !== 'alt',
})(({alt}) => ({
  ...(alt && {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  }),
}));

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== 'centertext' &&
    prop !== 'marginbottom' &&
    prop !== 'headingmargin',
})(({centertext, headingmargin, marginbottom}) => ({
  ...(centertext && {
    textAlign: 'center',
  }),
  ...(headingmargin && {
    margin: '4rem 0 2.2rem',
  }),
  ...(marginbottom && {
    marginBottom: '2.4rem',
  }),
}));

export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'margin',
})(({theme, width, margin}) => ({
  ...(width && {
    width: '18.8rem',
  }),
  ...(margin && {
    marginLeft: theme.spacing(4),
  }),
}));

export const styles = (theme) => ({
  imageBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
  },
});
