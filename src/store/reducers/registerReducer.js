import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
  data: null,
  // metaData: null,
  // timeSeries: null
};

const headerReducer = createReducer(initialState, {
  [actionsTypes.SET_ITEMS]: (state, {payload}) => {

    const metaData = payload["Meta Data"]
    const timeSeries = payload["Time Series (Daily)"]

    return {
      ...state,
      data: payload
      // metaData,
      // timeSeries
    }
  },
  [actionsTypes.ADD_ITEM]: (state, {payload}) => {
    const newData = [...state.data].push(payload);
    return {
      ...state,
      data: newData
    }
  },
  [actionsTypes.EDIT_ITEM]: (state, {payload}) => {
    /*const newData = [...state.data].push(payload);
    return {
      ...state,
      data: newData
    }*/
  },
  [actionsTypes.DELETE_ITEM]: (state, {payload}) => {
    /*const newData = [...state.data].push(payload);
    return {
      ...state,
      data: newData
    }*/
  }
});

export default headerReducer;

