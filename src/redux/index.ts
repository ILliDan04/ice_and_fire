import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./characters/slice";
import { housesSlice } from "./houses/slice";

export const store = configureStore({
  reducer: {
    [charactersSlice.name]: charactersSlice.reducer,
    [housesSlice.name]: housesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
