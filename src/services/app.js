import axiosConfig from "../axiosConfig";
import axiosDefault from "axios";
export const apiGetPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "api/v1/price/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const aipGetAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "api/v1/area/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const aipGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "api/v1/province/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const aipGetProvincesMap = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "GET",
        url: "https://vapi.vnappmob.com/api/province/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const aipGetDistrictMap = (idProvince) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "GET",
        url: `https://vapi.vnappmob.com/api/province/district/${idProvince}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
