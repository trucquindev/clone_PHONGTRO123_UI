import React, { useEffect, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { apiUploadImage } from "../services/post";
import { RiDeleteBinLine } from "react-icons/ri";
import { Loading } from "./";
const AddImage = ({ payload, setPayload, isSuccess, dataEdit, isEdit }) => {
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isEdit) {
      let images = JSON.parse(dataEdit?.images?.image);
      images && setImagesPreview(images);
    }
  }, [dataEdit, isEdit]);
  const handleFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    let images = [];
    const files = Array.from(e.target.files);
    const formData = new FormData();
    for (let file of files) {
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      const response = await apiUploadImage(formData);
      if (response.status === 200)
        images = [...images, response?.data?.secure_url];
    }
    setIsLoading(false);
    setImagesPreview((prev) => [...prev, ...images]);
    setPayload((prev) => ({
      ...prev,
      images: [...payload.images, ...images],
    }));
  };
  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev.filter((item) => item !== image));
  };
  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      images: [...imagesPreview],
    }));
  }, [imagesPreview]);
  useEffect(() => {
    if (isSuccess) {
      setImagesPreview([]);
    }
  }, [isSuccess]);
  return (
    <div className="w-full">
      <h2 className="font-semibold text-xl py-4">Thêm hình ảnh</h2>
      <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
      <div className="w-full flex flex-col gap-6">
        <label
          htmlFor="file"
          className="w-full border-2 h-[200px] my-2 border-gray-400 border-dashed rounded-md flex flex-col justify-center items-center gap-4"
        >
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex flex-col justify-center items-center">
              <IoMdImages color="blue" size={50} />
              Thêm ảnh
            </div>
          )}
        </label>
        <input onChange={handleFiles} multiple hidden type="file" id="file" />
        <p className="text-red-400">
          {payload.images.length === 0 && "Vui lòng tải ảnh của bạn lên !"}
        </p>
        <div className="w-full flex flex-col gap-4">
          <h3 className="font-semibold">Ảnh bạn đã tải lên</h3>
          <div className="flex gap-4 items-center">
            {imagesPreview &&
              imagesPreview.map((item) => {
                return (
                  <div key={item} className="rounded-md shadow-lg">
                    <img
                      src={item}
                      alt=""
                      className="w-[100px] h-[100px] object-cover rounded-md"
                    />
                    <span
                      onClick={() => handleDeleteImage(item)}
                      title="Xóa"
                      className=" cursor-pointer hover:bg-gray-400 w-full bg-white text-xl flex justify-center items-center rounded-md"
                    >
                      <RiDeleteBinLine className="" />
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
