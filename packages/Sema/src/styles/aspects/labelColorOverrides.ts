import { Colors } from '../constants';

/*
 * Ziel der Theme-Modifikation
 *
 *  -> um ausreichend Kontrast bei (Primary- bzw. Secondary-Color-) Button-Labels zu gewährleisten die Label-Farbe
 *     mit dem default Dunkelblau überschrieben
 */
const labelColorOverrides = {
  overrides: {
    MuiToggleButton: {
      label: {
        color: Colors.COSMOS_BLAU,
      },
    },

    MuiButton: {
      label: {
        color: Colors.COSMOS_BLAU,
      },
    },
  },
};

export default labelColorOverrides;
