import React, { useState } from "react";
import { Overview, Address, AddImage } from "../../componets";
const CreatePost = () => {
  const [payload, setPayload] = useState({
    categoryCode: "",
    title: "",
    priceNumber: 0,
    areaNumber: 0,
    description: "",
    priceCode: "",
    areaCode: "",
    target: "",
    images: [],
    address: "",
    province: "",
  });
  console.log(payload);
  return (
    <div className="p-6">
      <h1 className="text-2xl border-b border-gray-200 py-4">Đăng tin mới</h1>
      <div className="flex gap-4 ">
        <div className="py-4 flex flex-col flex-auto gap-8">
          <Address setPayload={setPayload} />
          <Overview payload={payload} setPayload={setPayload} />
          <AddImage payload={payload} setPayload={setPayload} />
          <div className="h-[500px]"></div>
        </div>
        <div className="w-[30%] flex-none">map</div>
      </div>
    </div>
  );
};

export default CreatePost;
