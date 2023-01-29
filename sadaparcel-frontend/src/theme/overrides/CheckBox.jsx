import React from 'react';

import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import {spacingxxs} from './spacing';

export function Checkbox(theme) {
  return {
    defaultProps: {
      checkedIcon: <CheckBoxOutlinedIcon />,
      icon: <CheckBoxOutlineBlankOutlinedIcon />,
      indeterminateIcon: <IndeterminateCheckBoxOutlinedIcon />,
    },
    styleOverrides: {
      root: {
        'padding': spacingxxs,
        'color': theme.palette.primary.main,
        'transition': 'color 0.15s ease',

        '& svg': {
          height: '1rem',
          width: '1rem',
        },

        '&.Mui-checked svg polyline, &.Mui-checked svg line': {
          strokeDasharray: 19,
          strokeDashoffset: 19,
          animation:
            '0.15s checkboxTick cubic-bezier(0.11, 0, 0.5, 0) forwards',
        },
      },
    },
  };
}
