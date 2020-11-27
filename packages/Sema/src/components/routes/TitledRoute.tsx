import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PrivateRoute from './PrivateRoute';

export type TitledRoutePropTypes = {
  title?: string;
  component?: React.ComponentType<RouteComponentProps>;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
};

const TitledRoute: FC<TitledRoutePropTypes> = ({
  title,
  component: Component,
  path,
  exact = false,
  isPrivate = true,
  ...rest
}: TitledRoutePropTypes): JSX.Element => {
  const baseTitle: string = 'Cosmos - Sema';
  const fullTitle: string = title && title.length ? `${baseTitle} | ${title}` : baseTitle;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      {isPrivate ? (
        <PrivateRoute exact={exact} path={path} component={Component} {...rest} />
      ) : (
        <Route exact={exact} path={path} component={Component} {...rest} />
      )}
    </>
  );
};

export default TitledRoute;
