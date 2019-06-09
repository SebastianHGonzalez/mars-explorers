import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { reducer as rootReducer, saga as rootSaga } from "mars-explorer/ducks";

export default function createMarsExplorerStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
