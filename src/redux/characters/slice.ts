import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/Character";
import { STATUSES } from "../../types/statuses";
import { getCharactersThunk } from "./thunks";

type State = {
  characters: Character[];
  totalPages: number;
  status: STATUSES;
};

const initialState: State = {
  characters: [],
  totalPages: 0,
  status: STATUSES.FULFILLED,
};

export const charactersSlice = createSlice({
  initialState: initialState,
  name: "characters",
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCharactersThunk.pending, (state) => {
        state.status = STATUSES.PENDING;
      })
      .addCase(getCharactersThunk.rejected, (state) => {
        state.status = STATUSES.REJECTED;
      })
      .addCase(getCharactersThunk.fulfilled, (state, { payload }) => {
        state.characters = payload.data;
        state.totalPages = payload.totalPages;
        state.status = STATUSES.FULFILLED;
      }),
});
