import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counter-slice";
import { fontsSliceApi } from "../features/fonts/fonts-slice-api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [fontsSliceApi.reducerPath]: fontsSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fontsSliceApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
