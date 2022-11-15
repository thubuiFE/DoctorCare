import { configureStore } from "@reduxjs/toolkit";
import fetchData from "../reducer/fetchDataMenu";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, fetchData);

export const store = configureStore({
  reducer: {
    fetchData,
    pReducer,
  },
});

export const persistor = persistStore(store);
