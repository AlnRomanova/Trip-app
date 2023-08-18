import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tripsReducer } from "./trips/tripsSlice";
import { currentForecastReducer } from "./forecast/currentForecastSlice";
import { weeklyForecastReducer } from "./forecast/weeklyForecastSlice";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, tripsReducer);


const store = configureStore({
  reducer: {
    trips: persistedReducer,
    weeklyForecast: weeklyForecastReducer,
    currentForecast: currentForecastReducer,
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
