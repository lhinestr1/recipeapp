import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import recipesReducer from "./reducers/recipeReducer";
import productsReducer from "./reducers/productsReducer";
import trendReducer from "./reducers/trendReducer";

export interface State extends ReturnType<typeof reducer> {}

const reducer = combineReducers({
  recipes: recipesReducer,
  products: productsReducer,
  trend: trendReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);
export default store;
