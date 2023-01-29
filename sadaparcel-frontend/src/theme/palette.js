import {alpha} from '@mui/material/styles';

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const NEUTRAL = {
  50: '#FAFAFA',
  100: '#F7F7F7',
  200: '#EDEDED',
  300: '#DCDCDC',
  400: '#CBCBCB',
  500: '#B5B5B5',
  600: '#969696',
  700: '#777777',
  800: '#595959',
  900: '#404040',
};

const PRIMARY = {
  main: '#1c4b40',
  contrastText: '#fff',
};

const SECONDARY = {
  main: '#19aa86',
  contrastText: '#fff',
};

const INFO = {
  light: '#fd6c6c',
  main: '#f20000',
  dark: '#cb0000',
};

const SUCCESS = {
  light: '#38c180',
  main: '#008e53',
  dark: '#00653b',
};

const WARNING = {
  light: '#fcebb6',
  main: '#fde28a',
  dark: '#fcd65c',
};

const ERROR = {
  light: '#fd6c6c',
  main: '#f20000',
  dark: '#cb0000',
};

const CHIPS = {
  emain: '#FF4842',
  etext: '#B72136',
  gmain: '#54D62C',
  gtext: '#229A16',
};

const palette = {
  chips: CHIPS,
  common: {black: '#000', white: '#fff'},
  primary: PRIMARY,
  neutral: NEUTRAL,
  browngrey: '#69817c',
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: '#1c4b40',
    secondary: '#19aa86',
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(SECONDARY.main, 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
