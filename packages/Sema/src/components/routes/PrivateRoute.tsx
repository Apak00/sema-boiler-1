import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { PublicRoutes } from '@router/routes';
import { IUserRaw } from '@store/ducks/auth/types';
import { getAuthUser } from '@utils/index';

export type PrivateRoutePropTypes = {
  component?: React.ComponentType<RouteComponentProps> | React.ComponentType;
  path: string;
  exact?: boolean;
};

const PrivateRoute: FC<PrivateRoutePropTypes> = ({
  component: Component,
  path,
  exact = false,
  ...rest
}: PrivateRoutePropTypes): JSX.Element => {
  const currUser: IUserRaw | null = getAuthUser();

  return currUser?.token ? (
    <Route exact={exact} path={path} component={Component} {...rest} />
  ) : (
    <Redirect
      to={{
        pathname: PublicRoutes.Login.path,
        state: {
          message: 'Please log in to view this page',
          requestedPath: path,
        },
      }}
    />
  );
};

export default PrivateRoute;
