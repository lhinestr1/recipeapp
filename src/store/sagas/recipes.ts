import { put, call, takeLatest } from "redux-saga/effects";
import { getRecipes, Recipe } from "../../services/services";
import { START_GET_RECIPES } from "../actions/";
import { update } from "../reducers/recipeReducer";

function* getRecipesSaga() {
  try {
    const result: Recipe[] = yield call(getRecipes /* params */);
    yield put(update(result));
  } catch (error) {}
}

//WATCHERS
export default function* recipes() {
  yield takeLatest(START_GET_RECIPES, getRecipesSaga);
}
