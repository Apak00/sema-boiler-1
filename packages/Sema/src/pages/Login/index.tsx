import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '@src/assets/logo.png';
import { useStyles } from '@pages/Login/styles';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardMedia component="img" src={logo} className={classes.media} />
      <Card>
        <CardContent className={classes.card}>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
