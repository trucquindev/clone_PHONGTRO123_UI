import React, { useState } from "react";
import Select from "./Select";
import { useSelector } from "react-redux";
import InputReadOnly from "./InputReadOnly";
import InputFormV2 from "./InputFormV2";

const target = [
  {
    code: "Nam",
    value: "Nam",
  },
  {
    code: "Nữ",
    value: "Nữ",
  },
];

const Overview = ({ payload, setPayload }) => {
  const { categories } = useSelector((state) => state.app);
  const { userData } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="font-semibold text-xl py-4">Thông tin mô tả</h1>
      <div className="w-full flex flex-col gap-4">
        <div className="w-1/2">
          <Select
            value={payload.categoryCode}
            setValue={setPayload}
            name="categoryCode"
            label="Loại chuyên mục"
            options={categories}
            type="category"
          />
        </div>
        <InputFormV2
          value={payload.title}
          setValue={setPayload}
          name="title"
          label="Tiêu đề"
        />
        <div className="flex flex-col">
          <label htmlFor="desc">Nội dung mô tả</label>
          <textarea
            value={payload.description}
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, description: e.target.value }))
            }
            id="desc"
            cols="30"
            rows="10"
            className="w-full rounded-md outline-none border border-gray-200 p-2"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <InputReadOnly label="Thông tin liên hệ" value={userData?.name} />
          <InputReadOnly label="Điện thoại" value={userData?.phone} />
          <InputFormV2
            small="Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"
            label="Giá cho thuê"
            unit="đồng"
            name="priceNumber"
            value={payload.priceNumber}
            setValue={setPayload}
          />
          <InputFormV2
            value={payload.areaNumber}
            setValue={setPayload}
            name="areaNumber"
            label="Diện tích"
            unit="m2"
          />
          <Select
            label="Đối tượng cho thuê"
            options={target}
            value={payload.target}
            setValue={setPayload}
            name="target"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
