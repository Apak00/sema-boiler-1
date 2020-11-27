import { Colors } from '../constants';

/*
 * Ziel der Theme-Modifikation
 *
 *  -> die App-Bar am Seitenkopf soll in 360°-Sicht & Rechnern identisch aussehen
 *  -> Cosmos-Blau auf Hellblau, Farbe ist nicht in der Palette, daher "colroDefault"
 */

const appBarStyle = {
  props: {
    MuiAppBar: {
      color: 'default',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: '5rem',
        '& .MuiToolbar-regular': {
          minHeight: '5rem',
        },
      },
      colorDefault: {
        backgroundColor: Colors.COSMOS_HELLBLAU,
        color: Colors.COSMOS_BLAU,
      },
    },
  },
};

export default appBarStyle;
