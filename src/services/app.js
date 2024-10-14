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
export const apiGetProvincesMap = () =>
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
export const apiGetDistrictMap = (idProvince) =>
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
export const apiGetWardMap = (idDistrict) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "GET",
        url: `https://vapi.vnappmob.com/api/province/ward/${idDistrict}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
