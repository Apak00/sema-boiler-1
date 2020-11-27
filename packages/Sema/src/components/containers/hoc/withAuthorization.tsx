import React from 'react';

type WithAuthorizationPropTypes = {
  allowedRights?: string | string[];
  isPage?: boolean;
}

// Authorization HOC
const withAuthorization: <T extends object>({
  allowedRights,
  isPage,
}: WithAuthorizationPropTypes & T) => (
  WrappedComponent: React.ComponentType,
) => (props: unknown) => JSX.Element | null = ({
  allowedRights = [],
  isPage = false,
  ...rest
}: WithAuthorizationPropTypes) => (WrappedComponent: React.ComponentType) => {
  const displayName:string = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithAuthorization = (props: any) => {
    // TODO: KULI => BUSINESS LOGIC !!!
    // const authUser: IUserRaw = useSelector((state: IApplicationState) => state.auth.user);
    // console.log('authUser', authUser);
    if (!allowedRights.length || allowedRights.includes('AUSWAHL')) {
      return <WrappedComponent {...props} {...rest} />;
    }
    if (isPage) {
      return <h1>You are not authorized to access this page</h1>;
    }
    return null;
  };

  ComponentWithAuthorization.displayName = `withAuthorization(${displayName})`;

  return ComponentWithAuthorization;
};

export default withAuthorization;
