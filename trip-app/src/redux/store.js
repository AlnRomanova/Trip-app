import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { tripsReducer } from './tripsSlices'; 

const persistConfig = {
  key: 'root', 
  storage, 

};

const persistedReducer = persistReducer(persistConfig, tripsReducer);

const store = configureStore({
  reducer: {
    trips: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };