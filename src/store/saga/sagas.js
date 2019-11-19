import { call, put } from "redux-saga/effects";
import types from "../actionsTypes";
import { setItems } from "../actions/registerActions";
import {fetchChartsApi} from "../../api";


export function* fetchItems(action) {


  const params = action.payload

  try {

    // yield put(setLoading(true));

    const result = yield call(fetchChartsApi, params);

    console.log(result);

    if (result.status === 200) {
      yield put(setItems(result.data));
    }

  } catch (error) {
    yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
