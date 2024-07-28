import axios from "../axiosConfig";

export const apiGetCurrentUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "api/v1/user/get-current-user",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
