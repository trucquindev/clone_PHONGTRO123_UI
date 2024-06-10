import actionTypes from "./actionType";
import { apiRegister, apiLoggin } from "../../services/auth";
export const register = (payload)=>async(dishpatch)=>{
    try {
        const response=await apiRegister(payload);
        if(response?.data.err===0){
            dishpatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            })
        }
        else{
            dishpatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dishpatch({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}
export const loggin = (payload)=>async(dishpatch)=>{
    try {
        const response=await apiLoggin(payload);
        if(response?.data.err===0){
            dishpatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token
            })
        }
        else{
            dishpatch({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dishpatch({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}

export const logout=()=>({
    type: actionTypes.LOGOUT
})