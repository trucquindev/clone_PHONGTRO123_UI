import { apiGetPosts } from "../../services/post";
import actionTypes from "./actionType";
export const getPosts = (payload)=>async(dishpatch)=>{
    try {
        const response=await apiGetPosts(payload);
        if(response?.data.err===0){
            dishpatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response
            })
        }
        else{
            dishpatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dishpatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}