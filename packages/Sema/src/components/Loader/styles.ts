import { createStyles, Theme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundColor: fade(theme.palette.primary.main, 0.7),
      zIndex: 1300,
    },
  });
