import { createAsyncThunk } from "@reduxjs/toolkit";
import { fireAndIceAPI, FIRE_AND_ICE_API_ROUTES } from "../../api/fire-and-ice";
import { House } from "../../types/House";

export const getHouseThunk = createAsyncThunk<House, string>(
  "getHouseThunk",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fireAndIceAPI.get<House>(
        FIRE_AND_ICE_API_ROUTES.HOUSES(id)
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
