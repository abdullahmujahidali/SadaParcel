import type {Components} from '@mui/material/styles/components';

import React from 'react';

import CustomIcon from 'components/CustomIcon';

import * as spacing from 'constants/spacing';

import {ICON_NAME} from 'constants/icons';

import colors from '../../../tokens/colors.json';

export default {
  defaultProps: {
    variant: 'filled',
    iconMapping: {
      success: <CustomIcon name={ICON_NAME.CHECK_SQUARE} />,
      warning: <CustomIcon name={ICON_NAME.ALERT_TRIANGLE} />,
      info: <CustomIcon name={ICON_NAME.INFO} />,
      error: <CustomIcon name={ICON_NAME.INFO} />,
    },
    componentsProps: {
      closeButton: {
        className: '!-my-3',
      },
    },
    components: {
      CloseIcon: () => <CustomIcon name={ICON_NAME.X_CIRCLE} />,
    },
  },
  styleOverrides: {
    filledError: {
      backgroundColor: colors.error['600'],
    },
    filledInfo: {
      backgroundColor: colors.information['500'],
    },
    filledSuccess: {
      backgroundColor: colors.success['600'],
    },
    filledWarning: {
      backgroundColor: colors.warning['400'],
    },
    action: {
      padding: 0,
      alignItems: 'center',
    },
    root: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: spacing.spacingm,
      paddingRight: spacing.spacingm,
    },
  },
} as Components['MuiAlert'];
