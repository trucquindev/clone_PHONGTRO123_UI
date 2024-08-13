import React, { memo } from "react";
import { text } from "../ultils/dataIntro";
import icons from "../ultils/icons";
import { Button } from "../componets/index";
import { useSelector } from "react-redux";
import { formatVietNameseToString } from "../ultils/common/formatVietNamese";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { MdOutlineStar } = icons;
const start = [1, 2, 3, 4, 5];
const Intro = () => {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.app);
  return (
    <div className=" w-3/5 flex flex-col justify-center items-center gap-4 bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-bold text-[18px] ">{text.title}</h3>
      <p className="text-gray-800 text-center text-[13px] my-4">
        {text.description}
        <span>
          {categories?.length > 0 &&
            categories.map((item) => {
              return (
                <Link
                  key={item.code}
                  to={`${formatVietNameseToString(item.value)}`}
                  className="text-blue-800 font-medium hover:text-orange-600"
                >
                  {`${item.value.toLowerCase()}, `}
                </Link>
              );
            })}
        </span>
        {text.description2}
      </p>
      <div className="flex justify-around items-center w-full">
        {text.statisticals.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-[12px]"
            >
              <span className="font-bold text-lg">{item.name}:</span>
              <p className="text-gray-700">{item.value}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-lg font-bold text-[18px] py-2 ">
        {text.priceDescription}
      </h3>
      <div className="flex items-center justify-center">
        {start.map((item, index) => {
          return (
            <span key={index}>
              <MdOutlineStar
                size={24}
                className="text-[20px] text-yellow-400"
              />
            </span>
          );
        })}
      </div>
      <p className="text-gray-600 italic text-center text-[13px]">
        {text.comments}
      </p>
      <span className="text-gray-700 text-[13px]">{text.author}</span>
      <h3 className="text-lg font-bold text-[18px] py-2 ">{text.question}</h3>
      <p className=" text-center text-[13px]">{text.answer}</p>
      <Button
        onClick={() => {
          navigate("/he-thong/tao-moi-bai-dang");
        }}
        text="Đăng tin ngay"
        bgColor="bg-secondary2"
        textColor="text-white"
        px="px-6"
      />
      <div className="h-12"></div>
    </div>
  );
};

export default memo(Intro);
