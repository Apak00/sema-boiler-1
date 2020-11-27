import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from './styles';

type LoaderPropTypes = {};

const Loader: React.FC<LoaderPropTypes> = ({}: LoaderPropTypes) => {
  const classes = makeStyles(styles)();
  return (
    <Box flex="1" display="flex" alignItems="center" justifyContent="center" className={classes.root}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;
