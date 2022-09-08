import { all, call, delay, spawn } from "redux-saga/effects";
import recipes from "./recipes";
import products from "./products";
import trend from "./trend";
import { SagaIterator } from "redux-saga";

export default function* rootSaga(): SagaIterator {
  yield all(
    [recipes, products, trend].map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            yield delay(3000);
          }
        }
      })
    )
  );
}
