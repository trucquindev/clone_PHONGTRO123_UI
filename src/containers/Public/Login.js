import React, { useEffect } from "react";
import { useState } from "react";
import { InputForm, Button } from "../../componets";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validate from "../../ultils/common/validateField";
const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setisRegister] = useState(location.state?.flag);

  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [invaliableFiles, setInvaliableFiles] = useState([]);
  useEffect(() => {
    setisRegister(location.state?.flag);
  }, [location.state?.flag]);
  console.log(update);

  useEffect(() => {
    isLoggedIn &&
      Swal.fire("Thành công", "Chào mừng bạn !", "success") &&
      navigate("/");
  }, [isLoggedIn]);
  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);
  const handleSummit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalidate = validate(finalPayload, setInvaliableFiles);
    if (invalidate === 0) {
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.loggin(payload));
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-4">
        <h3 className="font-semibold text-2xl mb-3">
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </h3>
        <div className="w-full flex flex-col gap-5 ">
          {isRegister && (
            <InputForm
              setInvaliableFiles={setInvaliableFiles}
              invaliableFiles={invaliableFiles}
              label={"Họ tên"}
              value={payload.name}
              setValue={setPayload}
              typePayload={"name"}
            />
          )}
          <InputForm
            setInvaliableFiles={setInvaliableFiles}
            invaliableFiles={invaliableFiles}
            label={"Số điện thoại"}
            value={payload.phone}
            setValue={setPayload}
            typePayload={"phone"}
          />
          <InputForm
            setInvaliableFiles={setInvaliableFiles}
            invaliableFiles={invaliableFiles}
            label={"Mật khẩu"}
            value={payload.password}
            setValue={setPayload}
            typePayload={"password"}
            type="password"
          />
          <Button
            text={isRegister ? "Đăng ký" : "Đăng nhập"}
            bgColor="bg-secondary1"
            textColor="text-white"
            fullWidth
            onClick={handleSummit}
          />
        </div>
        <div className="mt-7 flex items-center justify-between">
          {isRegister ? (
            <small>
              {" "}
              Bạn đã có tài khoản ?{" "}
              <span
                onClick={() => {
                  setisRegister(false);
                  setPayload({
                    name: "",
                    phone: "",
                    password: "",
                  });
                }}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Đăng nhập ngay
              </span>
            </small>
          ) : (
            <>
              <small className="text-[blue] hover:text-[red] cursor-pointer">
                Bạn quên mật khẩu
              </small>
              <small
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={() => {
                  setisRegister(true);
                  setPayload({
                    name: "",
                    phone: "",
                    password: "",
                  });
                }}
              >
                Tạo mới tài khoản
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
