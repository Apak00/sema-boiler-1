import { routerMiddleware } from 'connected-react-router';
import { Middleware } from 'redux';
import history from '@router/history';

const connectedRouterMiddleware: Middleware<object> = routerMiddleware(history);
export default connectedRouterMiddleware;
