import React, { useState } from "react";
import { useSelector } from "react-redux";
import { InputReadOnly, InputFormV2, Button } from "../../componets";
import avatar from "../../assets/avata.png";
import { apiUploadImage } from "../../services";
import { apiUpdateUser, apiUpdatePasswordUser } from "../../services";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import * as actions from "../../store/actions";
const ManageAccount = () => {
  const { userData } = useSelector((state) => state.user);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    name: userData?.name || "",
    avatar: userData?.avatar,
    fbUrl: userData?.fbUrl || "",
    zalo: userData?.zalo || "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSummit = async () => {
    const response = await apiUpdateUser(payload);
    if (response.data.err === 0)
      Swal.fire(
        "Thành công",
        "Chỉnh sửa thông tin cá nhân thành công",
        "success"
      ).then(() => {
        dispatch(actions.getCurrentUser());
      });
    else Swal.fire("Lỗi", "Không thể sửa thông tin cá nhân!", "error");
  };

  const handleSummitPassWord = async () => {
    if (payload.newPassword.length < 6) {
      Swal.fire("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự!", "error");
      return;
    }
    if (payload.newPassword !== payload.confirmPassword) {
      Swal.fire("Lỗi", "Mật khẩu xác nhận không đúng!", "error");
      return;
    }
    let finalPayload = {
      password: payload.password,
      newPassword: payload.newPassword,
    };
    const response = await apiUpdatePasswordUser(finalPayload);
    if (response.data.err === 0)
      Swal.fire("Thành công", "Đổi mật khẩu thành công", "success").then(() => {
        dispatch(actions.getCurrentUser());
      });
    else Swal.fire("Lỗi", "Không thể thay đổi password", "error");
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
          <small
            onClick={() => setIsEdit(true)}
            className="text-blue-300 h-12 flex-auto cursor-pointer"
          >
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
      {isEdit && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsEdit(false);
          }}
          className="absolute top-0 bottom-0 left-0 right-0 bg-overlay-70 flex justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-600 mt-56 max-h-96 w-full overflow-y-auto flex flex-col justify-center items-center gap-4"
          >
            <h1 className="text-xl w-full text-center border-b border-gray-200 h-[56px] flex-none py-4">
              Đổi mật khẩu
            </h1>
            <div className="w-3/5 flex flex-col flex-auto justify-center gap-4">
              <InputFormV2
                name="password"
                type="password"
                setValue={setPayload}
                value={payload?.password || ""}
                derection="flex-col"
                label="Mật khẩu cũ"
              />
              <InputFormV2
                type="password"
                name="newPassword"
                setValue={setPayload}
                value={payload?.newPassword || ""}
                derection="flex-col"
                label="Mật khẩu mới"
              />
              <InputFormV2
                type="password"
                name="confirmPassword"
                setValue={setPayload}
                value={payload?.confirmPassword || ""}
                derection="flex-col"
                label="Nhập lại mật khẩu mới"
              />
              <Button
                onClick={() => {
                  handleSummitPassWord();
                  setIsEdit(false);
                }}
                text="Cập nhật"
                bgColor="bg-blue-400"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAccount;
