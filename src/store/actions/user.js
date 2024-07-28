import actionTypes from "./actionType";
import { apiGetCurrentUser } from "../../services";

export const getCurrentUser = () => async (dispatch) => {
  try {
    const response = await apiGetCurrentUser();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CURRENT_USER,
        userData: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CURRENT_USER,
        userData: null,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CURRENT_USER,
      userData: null,
      msg: error,
    });
  }
};
