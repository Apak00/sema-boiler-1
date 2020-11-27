import React from 'react';
import { useSelector } from 'react-redux';
import { IApplicationState } from '@store/ducks/types';
import { ILoaderState } from '@store/ducks/loader/types';
import Loader from '@components/Loader';
import { LayoutProps } from '@components/containers/layouts/types';
import AlertDismissible from '@components/AlertDismissible';
import { IMessagesRaw, IMessagesState } from '@store/ducks/messages/types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';

const MainLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const loaderStateToProps: ILoaderState = useSelector(({ loader }: IApplicationState) => loader);
  const messagessStateToProps: IMessagesState = useSelector(({ messages }: IApplicationState) => messages);

  const trueStatusLength: number = Object.values(loaderStateToProps).filter((item: boolean) => item).length;

  let messagesLength: number = 0;
  if (messagessStateToProps) {
    messagesLength = Object.values(messagessStateToProps).filter(
      (item: IMessagesRaw) => item.description && item.description.length > 0,
    ).length;
  }

  return (
    <>
      <CssBaseline />
      {messagesLength > 0 &&
        Object.values(messagessStateToProps).map((msg: IMessagesRaw) => (
          <AlertDismissible message={msg} key={msg.id} />
        ))}
      {trueStatusLength > 0 && <Loader />}
      <Box flex="1" display="flex" flexDirection="column">
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
