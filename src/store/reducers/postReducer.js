import actionTypes from "../actions/actionType";
const initState = {
  posts: [],
  msg: "",
  count: 0,
  dataEdit: {},
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
    case actionTypes.GET_POSTS_LIMIT:
    case actionTypes.GET_NEW_POSTS:
    case actionTypes.GET_POST_BY_ID:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
        count: action.count || 0,
      };
    case actionTypes.EDIT_DATA:
      return {
        ...state,
        dataEdit: action.dataEdit || null,
      };
    case actionTypes.RESET_DATA:
      return {
        ...state,
        dataEdit: null,
      };
    default:
      return state;
  }
};
export default postReducer;
