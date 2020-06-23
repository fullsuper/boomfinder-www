import { applyMiddleware, compose, createStore, AnyAction } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import reducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const makeStore: MakeStore<object, AnyAction> = (initialState: object) => {
  const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default createWrapper<object>(makeStore, { debug: false });
