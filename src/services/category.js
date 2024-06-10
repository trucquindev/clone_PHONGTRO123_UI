import axiosConfig from "../axiosConfig";

export const apiGetCategory = (payload)=> new Promise(async(resolve, reject)=>{
    try {
        const response = await axiosConfig({
            method:'GET',
            url:'api/v1/category/all'
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})