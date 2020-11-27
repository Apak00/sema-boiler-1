import { customSpacing } from '../constants';

/*
 * Ziel der Theme-Modifikation
 *
 *  -> ein Grid mit spacing soll sich von Abständen identisch verhalten, unabhängig davon, ob die
 *     nächste Zeile durch einen "overflow" entsteht oder ich ein zweites Grid darunter platziere
 */

const gridMargins = {
  overrides: {
    MuiGrid: {
      'spacing-xs-1': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 0.5,
        },
      },
      'spacing-xs-2': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 1,
        },
      },
      'spacing-xs-3': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 1.5,
        },
      },
      'spacing-xs-4': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 2,
        },
      },
      'spacing-xs-5': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 2.5,
        },
      },
      'spacing-xs-6': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 3,
        },
      },
      'spacing-xs-7': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 3.5,
        },
      },
      'spacing-xs-8': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 4,
        },
      },
      'spacing-xs-9': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 4.5,
        },
      },
      'spacing-xs-10': {
        '.MuiGrid-container + &': {
          marginTop: customSpacing * 5,
        },
      },
    },
  },
};

export default gridMargins;
