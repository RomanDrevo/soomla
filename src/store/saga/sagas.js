import { call, put } from "redux-saga/effects";
import types from "../actionsTypes";
import { setItems } from "../actions/registerActions";

let data = [
  {name: "Dan"}
];

export function* fetchItems(action) {
  try {
    // const result = yield call(fetchItemsApi, action.payload);

    yield put(setItems(data));
  } catch (error) {
    yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
