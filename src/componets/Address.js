import React, { memo, useEffect, useState } from "react";
import Select from "./Select";
import InputReadOnly from "./InputReadOnly";
import {
  apiGetProvincesMap,
  apiGetDistrictMap,
  apiGetWardMap,
} from "../services";
import { useSelector } from "react-redux";
const Address = ({
  setPayload,
  invaliableFiles,
  setInvaliableFiles,
  isEdit,
}) => {
  const { dataEdit } = useSelector((state) => state.post);
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState("");

  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState();
  const [reset, setReset] = useState(false);
  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState();
  useEffect(() => {
    let arrEditAddress = isEdit ? dataEdit?.address?.split(", ") : "";
    let foundProvince =
      provinces.length > 0 &&
      provinces?.find((item) => item.province_name === arrEditAddress?.[2])
        ?.province_id;
    setProvince(foundProvince ? foundProvince : "");
  }, [provinces]);
  useEffect(() => {
    let arrEditAddress = isEdit ? dataEdit?.address?.split(", ") : "";
    let foundDistrict =
      districts.length > 0 &&
      districts?.find((item) => item.district_name === arrEditAddress?.[1])
        ?.district_id;
    setDistrict(foundDistrict ? foundDistrict : "");
  }, [districts]);
  useEffect(() => {
    let arrEditAddress = isEdit ? dataEdit?.address?.split(", ") : "";
    let foundWard =
      wards.length > 0 &&
      wards?.find((item) => item.ward_name === arrEditAddress?.[0])?.ward_id;
    setWard(foundWard ? foundWard : "");
  }, [wards]);
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
