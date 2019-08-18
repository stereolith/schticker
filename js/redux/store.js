// Imports: Dependencies
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// Middleware: Redux Persist Config

const middleware = [thunk];


const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};