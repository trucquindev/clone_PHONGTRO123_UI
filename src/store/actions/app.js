import * as apis from "../../services";
import actionTypes from "./actionType";

export const getCategories = ()=>async(dispatch)=>{
    try {
        const response=await apis.apiGetCategory();
        if(response?.data.err===0){
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories: response.data.response
            })
        }
        else{
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories: null
        })
    }
}
export const getPrices = ()=>async(dispatch)=>{
    try {
        const response=await apis.apiGetPrices();
        if(response?.data.err===0){
            dispatch({
                type: actionTypes.GET_PRICES,
                prices: response.data.response
            })
        }
        else{
            dispatch({
                type: actionTypes.GET_PRICES,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRICES,
            prices: null
        })
    }
}
export const getAreas = ()=>async(dispatch)=>{
    try {
        const response=await apis.aipGetAreas();
        if(response?.data.err===0){
            dispatch({
                type: actionTypes.GET_AREAS,
                areas: response.data.response
            })
        }
        else{
            dispatch({
                type: actionTypes.GET_AREAS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AREAS,
            areas: null
        })
    }
}