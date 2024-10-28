import { configureStore } from "@reduxjs/toolkit";
import ForecastReducer from "./slice/ForecastReducer";

const store = configureStore({
  reducer: {
    forecast: ForecastReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
