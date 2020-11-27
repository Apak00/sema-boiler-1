import { makeStyles } from '@material-ui/styles';
import { Colors } from '@src/styles';

export const useStyles = makeStyles(() => {
  return {
    root: {
      height: 70,
    },
    error: {
      borderColor: Colors.DANGER,
      color: Colors.DANGER,
      '&:focus': {
        borderWidth: 2,
        borderColor: Colors.DANGER,
        boxShadow: `0 0 8px ${Colors.DANGER}`,
      },
    },
    dirty: {
      backgroundColor: Colors.COSMOS_DIRTY_FIELD_BACKGROUND,
    },
    empty: {
      backgroundColor: Colors.COSMOS_EMPTY_FIELD_BACKGROUND,
    },
  };
});
