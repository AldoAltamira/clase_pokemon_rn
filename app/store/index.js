import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducers/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  userReducer: persistReducer(persistConfig, userReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
