import React, { useState } from "react";
import { getCodes, getCodesArea } from "../../ultils/common/getCodes";
import { Overview, Address, AddImage } from "../../componets";
import { Button } from "../../componets";
import { useSelector } from "react-redux";
import validate from "../../ultils/common/validateField";
import Swal from "sweetalert2";
import { apiCreatePost } from "../../services";
const CreatePost = () => {
  const { prices, areas, categories } = useSelector((state) => state.app);
  const { userData } = useSelector((state) => state.user);
  const [isSuccess, setIsSuccess] = useState(false);
  const [payload, setPayload] = useState({
    categoryCode: "",
    title: "",
    priceNumber: 0,
    areaNumber: 0,
    description: "",
    priceCode: "",
    areaCode: "",
    target: "",
    images: "",
    address: "",
    province: "",
    userId: "",
    label: "",
    target: "",
  });
  const [invaliableFiles, setInvaliableFiles] = useState([]);
  const handleSummit = async () => {
    let priceNumber = +payload.priceNumber / 1000000;
    let areaNumber = +payload.areaNumber;
    let priceCodeArr = getCodes(priceNumber, prices, 1, 15);
    let priceCode = priceCodeArr[0]?.code;
    let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 20, 90);
    let areaCode = areaCodeArr[0]?.code;
    let finalPayload = {
      ...payload,
      priceNumber,
      areaNumber,
      areaCode: areaCode,
      priceCode,
      userId: userData.id,
      label: `${
        categories?.find((item) => item.code === payload.categoryCode)?.value
      } ${payload?.address.split(",")[0]}`,
    };
    const results = validate(finalPayload, setInvaliableFiles);
    if (results === 0) {
      const response = await apiCreatePost(finalPayload);
      if (response?.data?.err === 0)
        Swal.fire("Thành công", "Đã thêm thành công bài đăng", "success").then(
          () => {
            setTimeout(() => {
              setIsSuccess(true);
            }, 2000);
            setPayload({
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
              userId: "",
              label: "",
            });
          }
        );
      else Swal.fire("Thất bại", "Có lỗi rồi bro ơi !", "error");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl border-b border-gray-200 py-4">Đăng tin mới</h1>
      <div className="flex gap-4 ">
        <div className="py-4 flex flex-col flex-auto gap-8">
          <Address
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            setPayload={setPayload}
          />
          <Overview
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            payload={payload}
            setPayload={setPayload}
          />
          <AddImage
            isSuccess={isSuccess}
            invaliableFiles={invaliableFiles}
            setInvaliableFiles={setInvaliableFiles}
            payload={payload}
            setPayload={setPayload}
          />
          <Button
            onClick={handleSummit}
            text="Tạo mới"
            bgColor="bg-green-600"
            textColor="text-white"
          />
          <div className="h-[50px]"></div>
        </div>
        <div className="w-[30%] flex-none">map</div>
      </div>
    </div>
  );
};

export default CreatePost;
