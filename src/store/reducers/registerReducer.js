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
  }

});

export default headerReducer;

