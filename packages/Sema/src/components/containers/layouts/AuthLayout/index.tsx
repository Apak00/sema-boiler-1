import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SecureRoutes } from '@router/routes';
import { LayoutProps } from '@components/containers/layouts/types';
import { Box } from '@material-ui/core';
import { getAuthUser} from '@utils/index';
import { IUserRaw } from '@store/ducks/auth/types';

const AuthLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const currentHistory = useHistory();
  const location: any = useLocation();
  const currUser: IUserRaw | null = getAuthUser();

  useEffect(() => {
    if (currUser?.token) {
      currentHistory.push(location.state?.requestedPath ?? SecureRoutes.Dashboard.path);
    }
  }, [currentHistory, location.state?.requestedPath]);
  return (
    <Box flex="1" display="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};

export default AuthLayout;
