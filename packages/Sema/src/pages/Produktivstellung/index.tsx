import React from 'react';
import { Switch } from 'react-router-dom';
import { KalenderProduktivstellung, third } from '@router/routes/SecureRoutes';
import TitledRoute from '@components/routes/TitledRoute';

type ProduktivstellungProps = {};

const Produktivstellung: React.FC<ProduktivstellungProps> = () => {
  return (
    <>
      <h1>Produktivstellung Module</h1>
      <Switch>
        <TitledRoute title={KalenderProduktivstellung.title} path={KalenderProduktivstellung.fullPath}>
          <h2>KalenderProduktivstellung Page</h2>
          <Switch>
            <TitledRoute title={third.title} path={third.fullPath}>
              <h2>third Page</h2>
            </TitledRoute>
          </Switch>
        </TitledRoute>
      </Switch>
    </>
  );
};

export default Produktivstellung;
