import { orange, red } from '@material-ui/core/colors';

import { Colors, WEISS } from './constants';

const palette = {
  background: { default: Colors.COSMOS_APP_BACKGROUND },
  primary: {
    light: '#C9EDFF',
    main: Colors.COSMOS_HELLBLAU,
    dark: '#90BBD1',
    contrastText: Colors.COSMOS_BLAU,
  },
  secondary: {
    light: '#B6E168',
    main: '#B1DB23',
    dark: '#94C21F',
    contrastText: Colors.COSMOS_BLAU,
  },
  default: {
    light: Colors.COSMOS_BLAU_HELLER_2,
    main: Colors.COSMOS_BLAU,
    // dark: will be NOT calculated from palette.default.main,
    contrastText: WEISS,
  },
  link: {
    // light: will be calculated from palette.link.main,
    main: Colors.COSMOS_BLAU,
    // dark: will be calculated from palette.link.main,
    contrastText: WEISS,
  },
  danger: {
    light: red[300],
    main: red[500],
    dark: red[700],
    contrastText: WEISS,
  },
  warning: {
    light: orange[300],
    main: orange[500],
    dark: orange[700],
    contrastText: WEISS,
  },
  success: {
    // light: will be calculated from palette.success.main,
    main: Colors.SUCCESS,
    // dark: will be calculated from palette.success.main,
    contrastText: WEISS,
  },
  info: {
    light: '#DEE5EC',
    main: Colors.INFO,
    dark: Colors.INFO,
    contrastText: WEISS,
    text: Colors.COSMOS_BLAU,
  },
  text: {
    primary: Colors.COSMOS_BLAU,
    secondary: Colors.COSMOS_BLAU_HELLER,
    disabled: Colors.COSMOS_GRAU_DARKER,
    hint: Colors.COSMOS_GRAU,
  },
};

export default palette;
