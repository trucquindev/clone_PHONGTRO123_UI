import axiosConfig from "../axiosConfig";

export const apiGetPosts = (payload)=> new Promise(async(resolve, reject)=>{
    try {
        const response = await axiosConfig({
            method:'GET',
            url:'api/v1/post/all'
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const apiGetPostsLimit = (page)=> new Promise(async(resolve, reject)=>{
    try {
        const response = await axiosConfig({
            method:'GET',
            url:`api/v1/post/limit?page=${page}`,
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})