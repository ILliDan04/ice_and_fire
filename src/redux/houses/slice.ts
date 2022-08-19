import { createSlice } from "@reduxjs/toolkit";
import { House } from "../../types/House";
import { STATUSES } from "../../types/statuses";
import { getHouseThunk } from "./thunks";

type State = {
  house: House | null;
  status: STATUSES;
};

const initialState: State = {
  house: null,
  status: STATUSES.FULFILLED,
};

export const housesSlice = createSlice({
  initialState: initialState,
  name: "houses",
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getHouseThunk.pending, (state) => {
        state.status = STATUSES.PENDING;
      })
      .addCase(getHouseThunk.rejected, (state) => {
        state.status = STATUSES.REJECTED;
      })
      .addCase(getHouseThunk.fulfilled, (state, { payload }) => {
        state.house = payload;
        state.status = STATUSES.FULFILLED;
      }),
});
