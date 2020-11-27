/*
 * Ziel der Theme-Modifikation
 *
 *  -> Loader-Verhalten und -Styling soll angepasst werden
 */

const loader = {
  props: {
    MuiCircularProgress: {
      color: 'inherit',
      disableShrink: true,
      size: 24,
      thickness: 4,
    },
  },
  overrides: {
    MuiCircularProgress: {
      indeterminate: { animationDuration: '450ms' },
    },
  },
};

export default loader;
