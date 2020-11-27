export const customBorderRadius = 4;

/*
 * Ziel der Theme-Modifikation
 *
 *  -> borderRadius konsistent bei 4px
 */
const borderRadius = {
  shape: {
    borderRadius: customBorderRadius,
  },
  overrides: {
    MuiButton: { root: { borderRadius: customBorderRadius } },
    MuiAutocomplete: { root: { borderRadius: customBorderRadius } },
    MuiSelect: {
      root: { borderRadius: customBorderRadius },
      select: { '&:focus': { borderRadius: customBorderRadius } },
    },
    MuiOutlinedInput: { root: { borderRadius: customBorderRadius } },
    MuiInputBase: {
      root: { borderRadius: customBorderRadius },
      input: { borderRadius: customBorderRadius },
    },
  },
};

export default borderRadius;
