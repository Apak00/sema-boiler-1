import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Router, Switch } from 'react-router-dom';
import { Store, AnyAction } from 'redux';
import MainLayout from '@components/containers/layouts/MainLayout';
import { IApplicationState } from '@store/ducks/types';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import configs from '@configs/index';
import { SecureRoutes, PublicRoutes } from '@src/router/routes';
import { SecureLayout, AuthLayout } from '@components/containers/layouts';
import TitledRoute from '@components/routes/TitledRoute';
import * as PageComponents from '@pages/index';

type AppPropTypes = {
  store: Store<IApplicationState, AnyAction>;
  history: History;
  theme: Theme;
};

const App: React.FC<AppPropTypes> = ({ store, history, theme }: AppPropTypes) => {
  const RouterComponent = configs.withConnectedRouter ? ConnectedRouter : Router;

  return (
    <Provider store={store}>
      <RouterComponent history={history}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route path="/admin/*" exact>
                  <SecureLayout>
                    <Switch>
                      <TitledRoute
                        title={SecureRoutes.Dashboard.title}
                        path={SecureRoutes.Dashboard.fullPath}
                        component={PageComponents.Dashboard}
                        exact={true}
                      />
                      <TitledRoute
                        title={SecureRoutes.Auftragsplanung.title}
                        path={SecureRoutes.Auftragsplanung.fullPath}
                        component={PageComponents.Auftragsplanung}
                      />
                      <TitledRoute
                        title={SecureRoutes.Produktivstellung.title}
                        path={SecureRoutes.Produktivstellung.fullPath}
                        component={PageComponents.Produktivstellung}
                      />
                      <TitledRoute
                        title={SecureRoutes.Modulauswahl.title}
                        path={SecureRoutes.Modulauswahl.fullPath}
                        component={PageComponents.Modulauswahl}
                      />
                      <TitledRoute
                        title={SecureRoutes.Releaseplanung.title}
                        path={SecureRoutes.Releaseplanung.fullPath}
                        component={PageComponents.Releaseplanung}
                      />
                      <TitledRoute
                        title={SecureRoutes.Promotestufenablgeich.title}
                        path={SecureRoutes.Promotestufenablgeich.fullPath}
                        component={PageComponents.Promotestufenablgeich}
                      />
                    </Switch>
                  </SecureLayout>
                </Route>
                <Route>
                  <AuthLayout>
                    <Switch>
                      <TitledRoute
                        isPrivate={false}
                        exact={true}
                        path={PublicRoutes.Login.fullPath}
                        component={PageComponents.Login}
                        title={PublicRoutes.Login.title}
                      />
                    </Switch>
                  </AuthLayout>
                </Route>
                <Route component={PageComponents.NotFound} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </HelmetProvider>
      </RouterComponent>
    </Provider>
  );
};

export default App;
