import { IMessagesRaw } from '@store/ducks/messages/types';
import { Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import configs from '@configs/index';

type AlertDismissiblePropTypes = {
  message: IMessagesRaw;
};

const AlertDismissible: React.FC<AlertDismissiblePropTypes> = ({ message, ...rest }: AlertDismissiblePropTypes) => {
  const [open, setOpen] = useState(true);
  const { title, description, severity = 'success' } = message;

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={configs.defaultHideDuration}
      onClose={e => handleClose(e)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert onClose={e => handleClose(e)} severity={severity} {...rest}>
        <AlertTitle>{title}</AlertTitle>
        {description}
      </Alert>
    </Snackbar>
  );
};

export default AlertDismissible;
