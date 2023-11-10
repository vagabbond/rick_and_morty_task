import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import heroesSlice from "./heroes/heroesSlice";

const middleware = [
 ...getDefaultMiddleware({
  serializableCheck: {
   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
 }),
];

const persistConfig = {
 key: "filter",
 storage,
 whitelist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, heroesSlice);

export const store = configureStore({
 reducer: {
  heroes: persistedReducer,
 },
 middleware,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
