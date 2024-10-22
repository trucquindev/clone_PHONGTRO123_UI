import React, { memo } from "react";

const Select = ({
  label,
  options,
  value,
  setValue,
  type,
  reset,
  name,
  invaliableFiles,
  setInvaliableFiles,
}) => {
  const hanldeErrorText = () => {
    let errorTextName = invaliableFiles?.find((item) => item.name === name);
    let errorText = invaliableFiles?.find((item) => item.name === "address");
    return `${
      errorTextName
        ? errorTextName.massage
        : "" || errorText
        ? errorText.massage
        : ""
    }`;
  };
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="font-medium" htmlFor="select-address">
        {label}
      </label>
      <select
        value={reset ? "" : value || ""}
        onFocus={() => setInvaliableFiles([])}
        onChange={(e) =>
          !name
            ? setValue(e?.target?.value)
            : setValue((prev) => ({ ...prev, [name]: e.target.value }))
        }
        id="select-address"
        name="select-address"
        className="outline-none border border-gray-300 w-full p-1 rounded-md text-sm"
      >
        <option value="">{`--Chọn ${label}--`}</option>
        {options?.map((item) => {
          return (
            <option
              key={
                type === "province"
                  ? item?.province_id
                  : type === "district"
                  ? item?.district_id
                  : type === "ward"
                  ? item?.ward_id
                  : item?.code
              }
              value={
                type === "province"
                  ? item?.province_id
                  : type === "district"
                  ? item.district_id
                  : type === "ward"
                  ? item?.ward_id
                  : item?.code
              }
            >
              {type === "province"
                ? item?.province_name
                : type === "district"
                ? item.district_name
                : type === "ward"
                ? item.ward_name
                : item?.value}
            </option>
          );
        })}
      </select>
      <small className="text-red-400">{hanldeErrorText()}</small>
    </div>
  );
};

export default memo(Select);
