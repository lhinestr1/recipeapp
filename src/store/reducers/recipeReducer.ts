import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../services/services";

const initialState: Recipe[] = [];

export const recipes = createSlice({
  name: "recipes",
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

export const { update } = recipes.actions;
export default recipes.reducer;
