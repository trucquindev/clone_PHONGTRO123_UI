import {
  apiGetPosts,
  apiGetPostsLimit,
  apiGetNewPosts,
  apiGetPostById,
  apiDetailPost,
} from "../../services/post";
import actionTypes from "./actionType";
export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};
export const getPostsLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};
export const getNewPosts = () => async (dispatch) => {
  try {
    const response = await apiGetNewPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_NEW_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_NEW_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEW_POSTS,
      posts: null,
    });
  }
};

export const getPostById = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostById(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_BY_ID,
        posts: response.data.response?.rows,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_BY_ID,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_BY_ID,
      posts: null,
    });
  }
};
export const editData = (dataEdit) => ({
  type: actionTypes.EDIT_DATA,
  dataEdit,
});
export const resetData = () => ({
  type: actionTypes.RESET_DATA,
});

export const getPostDetail = (query) => async (dispatch) => {
  try {
    const response = await apiDetailPost(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_DETAIL,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_DETAIL,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_DETAIL,
      posts: null,
    });
  }
};
