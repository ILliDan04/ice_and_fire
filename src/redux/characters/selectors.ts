import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const charactersState = (state: RootState) => state.characters;

export const charactersSelector = createSelector(
  charactersState,
  ({ characters }) => characters
);

export const totalPagesSelector = createSelector(
  charactersState,
  ({ totalPages }) => totalPages
);

export const charactersStatusSelector = createSelector(
  charactersState,
  ({ status }) => status
);
