import { Colors } from '../constants';

const disabledInputs = {
  overrides: {
    MuiInputBase: {
      root: {
        '&.Mui-disabled': {
          background: Colors.COSMOS_DISABLED_BG,
        },
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        '&.Mui-disabled, .Mui-disabled &&': {
          borderColor: Colors.DEFAULT_BORDER_COLOR,
          borderStyle: 'dotted',
        },
      },
    },
    MuiToggleButton: {
      root: {
        '&.Mui-disabled': {
          backgroundColor: Colors.COSMOS_DISABLED_BG,
          borderColor: Colors.DEFAULT_BORDER_COLOR,
          borderStyle: 'dotted',
          color: 'rgba(0,0,0,0.3)',

          '&.Mui-selected': {
            backgroundColor: Colors.COSMOS_DISABLED_SELECTED_BG,
          },

          '& .MuiToggleButton-label': {
            color: 'rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiButton: {
      root: {
        '&.Mui-disabled': {
          '& .MuiButton-label': {
            color: 'rgba(0,0,0,0.3)',
          },
        },
      },
    },
  },
};

export default disabledInputs;
