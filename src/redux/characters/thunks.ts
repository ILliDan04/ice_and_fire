import { createAsyncThunk } from "@reduxjs/toolkit";
import { fireAndIceAPI, FIRE_AND_ICE_API_ROUTES } from "../../api/fire-and-ice";
import { Character, GenderFilter } from "../../types/Character";

type GetCharactersParams = {
  page?: number;
  pageSize?: number;
  gender?: GenderFilter;
  culture?: string;
};

export const getCharactersThunk = createAsyncThunk<
  { data: Character[]; totalPages: number },
  GetCharactersParams
>(
  "getCharactersThunk",
  async ({ page = 1, pageSize = 10, gender, culture }, { rejectWithValue }) => {
    try {
      const { data, headers } = await fireAndIceAPI.get<Character[]>(
        FIRE_AND_ICE_API_ROUTES.CHARACTERS,
        { params: { page, pageSize, gender, culture } }
      );

      const parsedLinkData = headers.link
        .split(", ")
        .find((data) => data.includes('rel="last"'))
        ?.split(";")[0]
        .replaceAll(/[<>]/g, "");
      const url = new URL(parsedLinkData!);
      const totalPages = Number(url.searchParams.get("page"));

      return { data, totalPages };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
