import { put, call, takeLatest } from "redux-saga/effects";
import { getProducts, Recipe as Product } from "../../services/services";
import { START_GET_PRODUCTS } from "../actions/";
import { update } from "../reducers/productsReducer";

function* getProductsSaga() {
  try {
    const result: Product[] = yield call(getProducts);
    yield put(update(result));
  } catch (error) {}
}

//WATCHERS
export default function* products() {
  yield takeLatest(START_GET_PRODUCTS, getProductsSaga);
}
