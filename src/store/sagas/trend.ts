import { put, call, takeLatest } from "redux-saga/effects";
import { getTrend, Recipe as Trend } from "../../services/services";
import { START_GET_TREND } from "../actions/";
import { update } from "../reducers/trendReducer";

function* getTrendSaga() {
  try {
    const result: Trend[] = yield call(getTrend);
    yield put(update(result));
  } catch (error) {}
}

//WATCHERS
export default function* trend() {
  yield takeLatest(START_GET_TREND, getTrendSaga);
}
