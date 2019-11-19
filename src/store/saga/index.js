import {takeEvery} from "redux-saga/effects";
import types from '../actionsTypes'
import {fetchItems} from "../saga/sagas";

export function* watchSaga() {
  yield takeEvery(types.FETCH_ITEMS, fetchItems);
}
