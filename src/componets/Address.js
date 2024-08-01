import React, { memo, useEffect, useState } from "react";
import Select from "./Select";
import InputReadOnly from "./InputReadOnly";
import {
  apiGetProvincesMap,
  apiGetDistrictMap,
  apiGetWardMap,
} from "../services";
const Address = ({ setPayload, invaliableFiles, setInvaliableFiles }) => {
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState();
  const [reset, setReset] = useState(false);
  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState();
  useEffect(() => {
    const fetchPublicProvinces = async () => {
      const response = await apiGetProvincesMap();
      if (response.status === 200) {
        setProvinces(response?.data?.results);
      }
    };
    fetchPublicProvinces();
  }, []);
  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistricts = async () => {
      const response = await apiGetDistrictMap(province);
      if (response.status === 200) {
        setDistricts(response?.data?.results);
      }
    };
    province && fetchPublicDistricts();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);
  useEffect(() => {
    setWard(null);
    const fetchPublicWards = async () => {
      const response = await apiGetWardMap(district);
      if (response.status === 200) {
        setWards(response?.data?.results);
      }
    };
    district && fetchPublicWards();
    !district ? setReset(true) : setReset(false);
    !district && setWards([]);
  }, [district]);
  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      province: province
        ? provinces?.find((item) => item.province_id === province)
            ?.province_name
        : "",
      address: `${
        ward
          ? `${wards?.find((item) => item.ward_id === ward)?.ward_name}, `
          : ""
      }${
        district
          ? `${
              districts.find((item) => item.district_id === district)
                ?.district_name
            }, `
          : ""
      }${
        province
          ? provinces?.find((item) => item.province_id === province)
              ?.province_name
          : ""
      }`,
    }));
  }, [province, district, ward]);
  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <Select
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            type="province"
            value={province}
            setValue={setProvince}
            options={provinces}
            label="Tỉnh / Thành phố"
          />
          <Select
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            value={district}
            setValue={setDistrict}
            reset={reset}
            type="district"
            options={districts}
            label="Quận / Huyện"
          />
          <Select
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            value={ward}
            setValue={setWard}
            reset={reset}
            type="ward"
            options={wards}
            label="Xã / Phường"
          />
        </div>
        <InputReadOnly
          label="Địa chỉ chính xác"
          value={`${
            ward
              ? `${wards?.find((item) => item.ward_id === ward)?.ward_name}, `
              : ""
          } ${
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
  );
};

export default memo(Address);
