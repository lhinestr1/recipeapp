import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../services/services";

const initialState: Recipe[] = [];

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    update: (_, action: PayloadAction<Recipe[]>) => {
      return action.payload;
    },
    clear: (_) => {
      return initialState;
    },
  },
});

export const { update } = products.actions;
export default products.reducer;
