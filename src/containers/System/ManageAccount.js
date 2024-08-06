import React, { useState } from "react";
import { useSelector } from "react-redux";
import { InputReadOnly, InputFormV2, Button } from "../../componets";
import avatar from "../../assets/avata.png";
import { apiUploadImage } from "../../services";
import { apiUpdateUser } from "../../services";
const ManageAccount = () => {
  const { userData } = useSelector((state) => state.user);
  const [payload, setPayload] = useState({
    name: userData?.name || "",
    avatar: userData?.avatar,
    fbUrl: userData?.fbUrl || "",
    zalo: userData?.zalo || "",
  });
  const handleSummit = async () => {
    const response = await apiUpdateUser(payload);
    console.log(response);
  };
  const handleUpLoadFile = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSETS_NAME);
    const response = await apiUploadImage(formData);
    if (response.status === 200) {
      setPayload((prev) => ({
        ...prev,
        avatar: response.data.secure_url,
      }));
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl w-full text-start border-b border-gray-200 py-4">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="w-3/5 py-6 flex flex-col gap-4">
        <InputReadOnly
          derection="flex-row"
          label="Mã thành viên"
          value={`#${userData?.id?.replace(/[^0-9]/g, "").slice(1, 10)}`}
        />
        <InputReadOnly
          editPhone
          derection="flex-row"
          label="Số điện thoại"
          value={userData?.phone}
        />
        <InputFormV2
          name="name"
          setValue={setPayload}
          value={payload?.name}
          derection="flex-row"
          label="Tên hiển thị"
        />
        <InputFormV2
          name="zalo"
          setValue={setPayload}
          value={payload?.zalo}
          derection="flex-row"
          label="Số zalo"
        />
        <InputFormV2
          name="fbUrl"
          setValue={setPayload}
          value={payload?.fbUrl || ""}
          derection="flex-row"
          label="Facebook"
        />
        <div className="flex">
          <label className="w-48 flex-none" htmlFor="password">
            Mật khẩu
          </label>
          <small className="text-blue-300 h-12 flex-auto cursor-pointer">
            Đổi mật khẩu
          </small>
        </div>
        <div className="flex mb-6">
          <label className="w-48 flex-none" htmlFor="ảnh đại diện">
            Ảnh đại diện
          </label>
          <div>
            <img
              src={payload?.avatar || avatar}
              className="w-24 h-24 rounded-full object-cover"
            />
            <input
              type="file"
              id="avatar"
              className="appearance-none my-4"
              onChange={handleUpLoadFile}
            />
          </div>
        </div>
        <Button
          onClick={handleSummit}
          text="Cập nhật"
          bgColor="bg-blue-400"
          textColor="text-white"
        />
      </div>
    </div>
  );
};

export default ManageAccount;
