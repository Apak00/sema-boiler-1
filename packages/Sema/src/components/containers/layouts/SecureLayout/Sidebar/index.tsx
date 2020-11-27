import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Collapse, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import SecureRoutes from '@router/routes/SecureRoutes';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '@src/assets/logo.png';
import RouteBase from '@router/routes/RouteBase';
import { useStyles } from './styles';

type SidebarPropTypes = {};

export const Sidebar: React.FC<SidebarPropTypes> = () => {
  const classes = useStyles();
  const [state, setState] = useState<{ [k: string]: boolean }>({});

  const handleClick = (e: React.SyntheticEvent, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = {
      ...state,
      [key]: !state[key],
    };

    setState(newState);
  };
  useEffect(() => {
    const list = RouteBase.toBreadcrumbList(SecureRoutes);
    let newState = {};
    list.map(route => {
      newState = { ...newState, [route.name]: true };
    });
    setState(newState);
  }, []);

  const menuLevelLimit: number = 5;
  let currMenuLevel: number = 0;

  const generateMenu = ({ source, level }: { source: any; level?: number }) => {
    if (currMenuLevel === level) {
      return;
    }

    currMenuLevel += 1;

    return (
      <>
        {Object.keys(source).map((key: string) =>
          !source[key].children || currMenuLevel === level ? (
            <NavLink
              exact
              key={source[key].name}
              to={source[key].fullPath}
              className={classes.navLink}
              activeClassName={classes.activeNavLink}>
              <ListItem button component="div" className={classes.listItem}>
                <Box p="1rem 1.5rem">
                  <ListItemText primary={<Typography color="inherit">{source[key].title}</Typography>} />
                </Box>
              </ListItem>
            </NavLink>
          ) : (
            <React.Fragment key={source[key].name}>
              <ListItem button onClick={e => handleClick(e, source[key].name)}>
                <ListItemText primary={<Typography color="inherit">{source[key].title}</Typography>} />
                {state[source[key].name] ? <ExpandLess color="inherit" /> : <ExpandMore color="inherit" />}
              </ListItem>
              <Collapse in={state[source[key].name]} timeout="auto" unmountOnExit>
                <Box className={classes.collapseContent} pl={2}>
                  <List component="div">
                    {generateMenu({
                      source: source[key].children,
                      level: menuLevelLimit,
                    })}
                  </List>
                </Box>
              </Collapse>
            </React.Fragment>
          ),
        )}
      </>
    );
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left">
      <NavLink to={SecureRoutes.Dashboard.fullPath} className={classes.navLink} activeClassName={classes.activeNavLink}>
        <CardMedia component="img" src={logo} data-testid="logo" />
      </NavLink>
      <List component="nav">{generateMenu({ source: SecureRoutes, level: menuLevelLimit })}</List>
    </Drawer>
  );
};
