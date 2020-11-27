import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
export default sagaMiddleware;
