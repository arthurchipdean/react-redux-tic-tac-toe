import { createStore } from 'redux'
import rootReducer from '../reducers/index';

export default () => {

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    rootReducer
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
