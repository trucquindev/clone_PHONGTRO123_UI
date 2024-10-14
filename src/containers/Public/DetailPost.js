import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiDetailPost } from "../../services";
import { SliderCustom } from "../../componets";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import icons from "../../ultils/icons";
const {
  MdOutlineStar,
  FaLocationDot,
  GiMoneyStack,
  SlCrop,
  IoMdStopwatch,
  FaHashtag,
} = icons;

const DetailPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPostDetail(postId));
  }, [postId]);
  const { postdetail } = useSelector((state) => state.post);

  const handleStart = (star) => {
    let starts = [];
    for (let i = 1; i <= +star; i++)
      starts.push(
        <MdOutlineStar className="start-item" size={18} color="yellow" />
      );
    return starts;
  };

  return (
    <div className="w-full flex gap-4">
      <div className="w-[70%] bg-white shadow-md p-4 rounded-md">
        <SliderCustom
          images={
            postdetail &&
            postdetail.length > 0 &&
            JSON.parse(postdetail[0]?.images?.image)
          }
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-red-500 my-4">
            {handleStart(+postdetail[0]?.star).length > 0 &&
              handleStart(+postdetail[0]?.star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {postdetail[0]?.title}
          </h2>
          <div className="flex items-center gap-2">
            <span>Chuyên mục: </span>
            <span className="text-[#3563EB] underline font-medium hover:text-orange-400 cursor-pointer">
              {postdetail[0]?.overviews?.area}
            </span>
          </div>
          <div>
            <span className="flex gap-2 items-center">
              <FaLocationDot color="#3563EB" />
              {postdetail[0]?.address}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <GiMoneyStack />
              <span className="font-semibold text-xl text-green-500">
                {postdetail[0]?.attributes?.price}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <SlCrop />
              <span>{postdetail[0]?.attributes?.acreage}</span>
            </span>
            <span className="flex items-center gap-1">
              <IoMdStopwatch />
              <span>{postdetail[0]?.attributes?.published}</span>
            </span>
            <span className="flex items-center gap-1">
              <span>{postdetail[0]?.attributes?.hashtag}</span>
            </span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Thông tin mô tả</h3>
          <div className="flex flex-col gap-2">
            {postdetail &&
              postdetail[0]?.description &&
              JSON.parse(postdetail[0]?.description)?.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Thông tin mô tả</h3>
          <table className="w-full">
            <tbody className="w-full">
              <tr className="w-full">
                <td className="py-2 px-4">Mã tin: </td>
                <td className="py-2 px-4">{postdetail[0]?.overviews?.code}</td>
              </tr>
              <tr className="w-full bg-gray-200">
                <td className="py-2 px-4">Loại tin rao: </td>
                <td className="py-2 px-4">{postdetail[0]?.overviews?.type}</td>
              </tr>
              <tr className="w-full">
                <td className="py-2 px-4">Đối tượng thuê: </td>
                <td className="py-2 px-4">
                  {postdetail[0]?.overviews?.target}
                </td>
              </tr>
              <tr className="w-full bg-gray-200">
                <td className="py-2 px-4">Gói tin: </td>
                <td className="py-2 px-4">{postdetail[0]?.overviews?.bonus}</td>
              </tr>
              <tr className="w-full">
                <td className="py-2 px-4">Ngày đăng: </td>
                <td className="py-2 px-4">
                  {postdetail[0]?.overviews?.created}
                </td>
              </tr>
              <tr className="w-full bg-gray-200">
                <td className="py-2 px-4">Ngày hết hạn: </td>
                <td className="py-2 px-4">
                  {postdetail[0]?.overviews?.expire}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Thông tin liên hệ</h3>
          <table className="w-full">
            <tbody className="w-full">
              <tr className="w-full ">
                <td className="py-2 px-4">Liên hệ: </td>
                <td className="py-2 px-4">{postdetail[0]?.user?.name}</td>
              </tr>
              <tr className="w-full bg-gray-200">
                <td className="py-2 px-4">Điện thoại: </td>
                <td className="py-2 px-4">{postdetail[0]?.user?.phone}</td>
              </tr>
              <tr className="w-full">
                <td className="py-2 px-4">Zalo </td>
                <td className="py-2 px-4">{postdetail[0]?.user?.zalo}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Bản đồ</h3>
        </div>
      </div>
      <div className="w-[30%]">content</div>
    </div>
  );
};

export default DetailPost;
