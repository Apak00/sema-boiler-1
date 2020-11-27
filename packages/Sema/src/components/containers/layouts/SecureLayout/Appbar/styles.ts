import { DRAWER_WIDTH } from '@components/containers/layouts/SecureLayout/constants';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  appBar: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
  },
}));
