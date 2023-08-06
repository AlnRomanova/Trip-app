import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tripsReducer } from './trips/tripsSlice'; 
import { forecastReducer } from './forecast/forecastSlice';

const persistConfig = {
  key: 'root', 
  storage, 

};

const persistedReducer = persistReducer(persistConfig, tripsReducer);

const store = configureStore({
  reducer: {
    trips: persistedReducer,
    forecast: forecastReducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };