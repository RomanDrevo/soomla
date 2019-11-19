import types from "../actionsTypes";

export const fetchItems = data =>{
  return{
    type: types.FETCH_ITEMS,
    payload: data
  };
};

export const setItems = data =>{
  return{
    type: types.SET_ITEMS,
    payload: data
  };
};





