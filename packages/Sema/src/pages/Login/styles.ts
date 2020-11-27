import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  media: {
    width: 300,
    marginBottom: '3rem',
  },
  card: {
    padding: '4rem',
  },
}));
