import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogoutRequest } from '@store/ducks/auth/actions';
import { AppBar, Toolbar, Button, Typography, Box } from '@material-ui/core';
import { Dispatch } from 'redux';
import RouteBase from '@router/routes/RouteBase';
import { NavLink, useLocation } from 'react-router-dom';
import { SecureRoutes } from '@router/routes';
import { useStyles } from './styles';

type AppbarPropTypes = {};

export const Appbar: FC<AppbarPropTypes> = () => {
  const classes = useStyles();
  const dispatch: Dispatch = useDispatch();
  const [breadcrumb, setBreadcrumb] = useState<RouteBase[]>([]);
  const location = useLocation();

  const handleLogoutClick: () => void = () => {
    dispatch(fetchLogoutRequest());
  };
  useEffect(() => {
    setBreadcrumb(RouteBase.toBreadcrumbList(SecureRoutes));
  }, [location.pathname]);

  return (
    <header data-testid="Appbar">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Button onClick={handleLogoutClick}>Logout</Button>
        </Toolbar>
        <Box display="flex" p="1rem">
          {breadcrumb.map((route: RouteBase, idx) => (
            <React.Fragment key={route.name}>
              <NavLink exact to={route.fullPath}>
                <Typography>{route.title}</Typography>
              </NavLink>
              {idx < breadcrumb.length - 1 && <Box px="0.4rem">{'>>'}</Box>}
            </React.Fragment>
          ))}
        </Box>
      </AppBar>
    </header>
  );
};
