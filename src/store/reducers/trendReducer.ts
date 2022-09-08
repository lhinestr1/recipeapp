import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe as Trend } from "../../services/services";

const initialState: Trend[] = [];

export const trend = createSlice({
  name: "trend",
  initialState,
  reducers: {
    update: (_, action: PayloadAction<Trend[]>) => {
      return action.payload;
    },
    clear: (_) => {
      return initialState;
    },
  },
});

export const { update } = trend.actions;
export default trend.reducer;
