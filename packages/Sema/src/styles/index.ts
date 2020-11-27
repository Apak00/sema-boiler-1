import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import appBarStyle from './aspects/appBarStyle';
import borderRadius from './aspects/borderRadius';
import disabledInputs from './aspects/disabledInputs';
import gridMargins from './aspects/gridMargins';
import labelColorOverrides from './aspects/labelColorOverrides';
import loader from './aspects/loader';
import outlinedInputs from './aspects/outlinedInputs';
import tooltips from './aspects/tooltips';

import { ALICEBLUE, BLAU, Colors, customSpacing, GRAU, ROT, WEISS } from './constants';
import palette from './palette';
import typography from './typography';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    wde: true;
  }
}

export { ROT, WEISS, BLAU, GRAU, ALICEBLUE, Colors };

// Generate breakpoints so we can use them in the theme definition
const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'wde', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      wde: 1500,
      xl: 1920,
    },
  },
  palette,
  spacing: customSpacing,
  typography,
});

const responsiveTableFontConfig = {
  // WDE (800px - 1500px)
  fontSize: '1.1rem',
  // Standalone (1500px > n.n)
  [theme.breakpoints.up('wde')]: {
    fontSize: '1.2rem',
  },
};

const responsiveTableGroupConfig = {
  ...responsiveTableFontConfig,
  '& .MuiTypography-body1': {
    ...responsiveTableFontConfig,
  },
  '& .MuiTypography-h6': {
    ...responsiveTableFontConfig,
  },
};

// demnächst besser **responsiveFontSizes(theme)(options)** verwenden!
export const cosmosTheme = createMuiTheme(
  theme,
  appBarStyle,
  borderRadius,
  labelColorOverrides,
  loader,
  outlinedInputs,
  disabledInputs,
  gridMargins,
  tooltips,
  {
    overrides: {
      // responsive table font sizes
      MuiTableCell: {
        root: responsiveTableGroupConfig,
        head: responsiveTableGroupConfig,
        body: responsiveTableGroupConfig,
      },

      MuiTypography: {
        body1: {
          // TODO Änderung mit Team 42 absprechen: Breakpoint (md => wde) und fontSize (1.1rem => 1.2rem)
          [theme.breakpoints.up('wde')]: {
            fontSize: '1.2rem',
          },
        },
      },

      MuiDialogContent: {
        dividers: {
          borderBottom: 'none',
        },
      },

      MuiToggleButton: {
        root: {
          fontSize: '1.2rem',
        },
      },

      MuiButton: {
        root: {
          fontSize: '1.2rem',
        },
      },

      MuiChip: {
        labelSmall: {
          fontSize: '1.2rem',
        },
      },

      MuiRadio: {
        colorSecondary: {
          '&$checked': { color: Colors.COSMOS_BLAU },
        },
      },
    },
  },
);

if (import.meta.env.MODE === 'development') {
  (window as any).theme = cosmosTheme;
}
