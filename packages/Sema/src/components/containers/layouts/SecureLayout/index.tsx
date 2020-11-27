import React from 'react';
import { LayoutProps } from '@components/containers/layouts/types';
import { Appbar } from '@components/containers/layouts/SecureLayout/Appbar';
import { Sidebar } from '@components/containers/layouts/SecureLayout/Sidebar';
import { useStyles } from './styles';

const SecureLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Appbar />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default SecureLayout;
