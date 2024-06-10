import axiosConfig from "../axiosConfig";

export const apiRegister = (payload)=> new Promise(async(resolve, reject)=>{
    try {
        const response = await axiosConfig({
            method:'POST',
            url:'api/v1/auth/register',
            data:payload
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const apiLoggin = (payload)=> new Promise(async(resolve, reject)=>{
    try {
        const response = await axiosConfig({
            method:'POST',
            url:'api/v1/auth/loggin',
            data:payload
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})