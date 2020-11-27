import React from 'react';
import withAuthorization from '@components/containers/hoc/withAuthorization';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
};

export default withAuthorization({
  allowedRights: ['AUSWAHL', 'AUSWAHL_LIST', 'AUSWAHL_EDIT', 'AUSWAHL_CREATE'],
  isPage: true,
  setDisabled: true,
})(Dashboard);
