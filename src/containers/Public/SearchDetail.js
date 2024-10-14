import React from "react";
import { ItemSideBar, RelatedPost } from "../../componets";
import { List, Pagination } from "./index";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SearchDetail = () => {
  const location = useLocation();
  const { prices, areas } = useSelector((state) => state.app);
  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold flex justify-center">
          {location?.state?.titleSearch || "Kết quả tìm kiếm"}
        </h1>
        <p className="text-base text-gray-700">
          {`${
            location?.state?.titleSearch || ""
          }, phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.` ||
            ""}
        </p>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSideBar
            type="priceCode"
            content={prices}
            title="Xem theo giá"
            isDouble={true}
          />
          <ItemSideBar
            type="areaCode"
            content={areas}
            title="Xem theo diện tích"
            isDouble={true}
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
