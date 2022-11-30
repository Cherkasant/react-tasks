import authSagaWatcher from "./authSagas";
import { all } from "redux-saga/effects";
import postSagaWatcher from "./postSaga";

export function* rootSaga() {
  yield all([authSagaWatcher(), postSagaWatcher()]);
}
