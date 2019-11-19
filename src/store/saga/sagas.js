import { call, put } from "redux-saga/effects";
import types from "../actionsTypes";
import {setItems, setLoading} from "../actions/registerActions";
import {fetchChartsApi} from "../../api";


export function* fetchItems(action) {


  const params = action.payload

  try {

    yield put(setLoading(true));

    const result = yield call(fetchChartsApi, params);

    if (result.status === 200) {
      yield put(setItems(result.data));
      yield put(setLoading(false));
    }

  } catch (error) {
    yield put(setLoading(false));
    yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
