import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const charactersState = (state: RootState) => state.houses;

export const houseSelector = createSelector(
  charactersState,
  ({ house }) => house
);

export const housesStatusSelector = createSelector(
  charactersState,
  ({ status }) => status
);
