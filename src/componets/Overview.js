import React from "react";
import Select from "./Select";
import { useSelector } from "react-redux";
import InputReadOnly from "./InputReadOnly";
import InputFormV2 from "./InputFormV2";
import { editData } from "../store/actions";

const target = [
  {
    code: "Nam",
    value: "Nam",
  },
  {
    code: "Nữ",
    value: "Nữ",
  },
  {
    code: "Tất cả",
    value: "Tất cả",
  },
];

const Overview = ({
  payload,
  setPayload,
  invaliableFiles,
  setInvaliableFiles,
}) => {
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
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
          />
        </div>
        <InputFormV2
          invaliableFiles={invaliableFiles}
          setInvaliableFiles={setInvaliableFiles}
          value={payload.title}
          setValue={setPayload}
          name="title"
          label="Tiêu đề"
        />
        <div className="flex flex-col">
          <label htmlFor="desc">Nội dung mô tả</label>
          <textarea
            onFocus={() => setInvaliableFiles([])}
            value={payload.description}
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            id="desc"
            cols="30"
            rows="10"
            className="w-full rounded-md outline-none border border-gray-200 p-2"
          />
          <small className="text-red-400">
            {invaliableFiles?.some((item) => item.name === "description") &&
              invaliableFiles?.find((item) => item.name === "description")
                ?.massage}
          </small>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <InputReadOnly label="Thông tin liên hệ" value={userData?.name} />
          <InputReadOnly label="Điện thoại" value={userData?.phone} />
          <InputFormV2
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            small="Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"
            label="Giá cho thuê"
            unit="đồng"
            name="priceNumber"
            value={payload.priceNumber}
            setValue={setPayload}
          />
          <InputFormV2
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            value={payload.areaNumber}
            setValue={setPayload}
            name="areaNumber"
            label="Diện tích"
            unit="m2"
          />
          <Select
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
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
