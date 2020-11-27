import { Colors } from '../constants';

/*
 * Ziel der Theme-Modifikation
 *
 *  -> alle Input-Elemente sollen standardmäßig in einem "outlined style" dargestellt werden
 *  -> diese Border soll
 *      ... "on hover" eine cosmos-dunkelblaue border bekommen
 *      ... "on focus" eine cosmos-hellblaue border bekommen nebst "glow effect"
 *  -> Fehlerzustand, border + Schriftfarbe in "danger" rot
 *      ... "on focus" zusätzlich "glow effect" in danger rot
 *  -> die Innenabstände sollen reduziert werden (Mui verwendet hier relativ hohe fest in Pixel codierte Werte)
 *  -> die "shrink" labels sollen *oberhalb* des Eingabeelements dargestellt werden, nicht auf der border
 *
 *
 * Anmerkungen zur konkreten Umsetzung
 *
 *  -> die Innenabstände wurden mit "1rem 1.2rem" gewählt (statt "18.5px 14px"),
 *     Original-Wert vgl. https://github.com/mui-org/material-ui/blob/6e26b3cc7d2c94a0facbb629ce0aaab69a8d4da4/packages/material-ui/src/OutlinedInput/OutlinedInput.js#L74
 */

const outlinedInputs = {
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiOutlinedInput: {
      notched: false,
    },
    MuiInputLabel: {
      shrink: true,
    },
  },

  overrides: {
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '1.6rem',
      },
      outlined: {
        transform: 'translate(1rem, 2.7rem) scale(1)',
      },
      shrink: {
        '&&&': {
          // TODO gehört das hier nach outline, oder gibt es einen besseren Platz?
          transform: 'translate(0, -0.1rem) scale(0.9)',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        marginTop: '1.5rem',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: Colors.COSMOS_FIELD_BORDER_FOCUS,
          boxShadow: `0 0 8px ${Colors.COSMOS_FIELD_BORDER_FOCUS}`,
        },
        '&.Mui-error, &.Mui-error.Mui-focused': {
          color: Colors.DANGER,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.DANGER,
          },
        },
        '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
          boxShadow: `0 0 8px ${Colors.DANGER}`,
        },
      },
      input: {
        padding: '0.875rem 0.9rem',
      },
      adornedEnd: {
        paddingRight: 0,

        '& .MuiTypography-body1': {
          // adjust font-size and padding to match input-font-size
          fontSize: 'inherit',
          paddingTop: '0.1rem',
        },
      },
    },

    // TODO wo soll das hin?  :)
    MuiTouchRipple: {
      rippleVisible: { transform: 'scale(0.7)' },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1,
        },
        '100%': {
          transform: 'scale(0.7)',
          opacity: 0.3,
        },
      },
    },

    MuiAutocomplete: {
      groupLabel: {
        fontSize: '1.2rem',
      },
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          padding: 0,
        },

        '&&[class*="MuiOutlinedInput-root"] input': {
          paddingTop: '0.9rem',
          paddingBottom: '0.9rem',
        },
      },
    },
  },
};

export default outlinedInputs;
