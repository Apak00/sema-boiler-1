import { DRAWER_WIDTH } from '@components/containers/layouts/SecureLayout/constants';
import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '@src/styles';

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRight: 'none',
    width: DRAWER_WIDTH,
    color: theme.palette.primary.main,
    backgroundColor: Colors.COSMOS_BLAU,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  navLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    width: '100%',
  },
  activeNavLink: {
    color: theme.palette.secondary.main,
  },
  collapseContent: {
    backgroundColor: Colors.COSMOS_BLAU_HELLER,
  },
  icon: {
    color: Colors.COSMOS_BLAU,
  },
  listItem: {
    padding: 0,
  },
}));
