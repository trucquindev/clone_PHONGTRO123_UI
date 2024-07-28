import React, { useEffect, useState } from "react";
import SelectAddress from "./SelectAddress";
import { aipGetProvincesMap, aipGetDistrictMap } from "../services";
const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState();
  const [reset, setReset] = useState(false);
  useEffect(() => {
    const fetchPublicProvinces = async () => {
      const response = await aipGetProvincesMap();
      if (response.status === 200) {
        setProvinces(response?.data?.results);
      }
    };
    fetchPublicProvinces();
  }, []);
  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistricts = async () => {
      const response = await aipGetDistrictMap(province);
      if (response.status === 200) {
        setDistricts(response?.data?.results);
      }
    };
    province && fetchPublicDistricts();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);
  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <SelectAddress
            type="province"
            value={province}
            setValue={setProvince}
            options={provinces}
            label="Tỉnh/ thành phố"
          />
          <SelectAddress
            value={district}
            setValue={setDistrict}
            reset={reset}
            type="district"
            options={districts}
            label="Quận/huyện"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            readOnly
            className="border border-gray-200 rounded-md bg-gray-100 p-2 w-full outline-none"
            value={`${
              district
                ? `${
                    districts.find((item) => item.district_id === district)
                      ?.district_name
                  }, `
                : ""
            } ${
              province
                ? provinces?.find((item) => item.province_id === province)
                    ?.province_name
                : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
