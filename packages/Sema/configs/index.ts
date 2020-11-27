type ConfigsProps = {
  withConnectedRouter: boolean;
  baseUrl: string;
  defaultHideDuration: number;
};

const configs: ConfigsProps = {
  withConnectedRouter: false,
  baseUrl: 'http://sema-app-cosmos-operations-fach.ocpt.generali-gruppe.de',
  defaultHideDuration: 6000,
};

export default configs;
