import actionTypes from "../actions/actionType";
const initState = {
  posts: [],
  msg: "",
  count: 0,
  dataEdit: {},
  postdetail: [],
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
      break;
    case actionTypes.EDIT_DATA:
      return {
        ...state,
        dataEdit: action.dataEdit || null,
      };
      break;
    case actionTypes.RESET_DATA:
      return {
        ...state,
        dataEdit: null,
      };
      break;
    case actionTypes.GET_POST_DETAIL:
      return {
        ...state,
        postdetail: action.posts || [],
        msg: action.msg || "",
      };
      break;
    case actionTypes.DELETE_POST:
    default:
      return state;
  }
};
export default postReducer;
