import actionTypes from "../actions/actionType";
const initState = {
  userData: {},
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_USER:
      return {
        ...state,
        userData: action.userData || {},
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
};
export default userReducer;
