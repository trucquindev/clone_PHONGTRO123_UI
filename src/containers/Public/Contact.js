import React, { useState } from "react";
import { Button, InputForm } from "../../componets";
import Swal from "sweetalert2";
const Contact = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleSummit = () => {
    if (!payload.name || !payload.phone || !payload.message) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    Swal.fire(
      `Cảm ơn ${payload.name ? payload.name : ""}`,
      "Cảm ơn về đóng góp của bạn, chúng tôi đã tiếp nhận và sẽ xử lí sớm!",
      "success"
    );
    setPayload({ name: "", phone: "", message: "" });
  };
  return (
    <div className="w-full">
      <h1 className="text-3xl font-medium mb-6">Liên hệ với chúng tôi</h1>
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col gap-2 h-fit bg-red-300 rounded-3xl mt-5 p-4 text-white bg-gradient-to-br from-blue-700 to-cyan-400">
          <h4 className="text-xl font-medium">Thông tin liên hệ</h4>
          <span>
            Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa
            chọn PhongTro123.Com{" "}
          </span>
          <span>
            <span className="font-bold">Điện thoại:</span> 0917 686 101
          </span>
          <span>
            <span className="font-bold">Email:</span> cskh.phongtro123@gmail.com
          </span>
          <span>
            <span className="font-bold">Zalo:</span> 0917 686 101
          </span>
          <span>
            <span className="font-bold">Viber:</span> 0917 686 101
          </span>
          <span>
            <span className="font-bold">Địa chỉ:</span> Căn 02.34, Lầu 2, Tháp
            3, The Sun Avenue, Số 28 Mai Chí Thọ, Phường An Phú, Thành phố Thủ
            Đức, Thành phố Hồ Chí Minh, Việt Nam.
          </span>
        </div>
        <div className="flex-1 bg-white p-4 rounded-2xl ">
          <h4 className="text-xl font-medium">Liên hệ trực tuyến</h4>
          <div className="flex flex-col gap-3">
            <InputForm
              value={payload.name || ""}
              setValue={setPayload}
              typePayload="name"
              label="HỌ TÊN CỦA BẠN"
            />
            <InputForm
              value={payload.phone || ""}
              setValue={setPayload}
              typePayload="phone"
              label="SỐ ĐIỆN THOẠI"
            />
            <div className="flex flex-col">
              <label className="text-xs" htmlFor="desc">
                NỘI DUNG
              </label>
              <textarea
                placeholder="Nhập phản hồi "
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                id="desc"
                value={payload.message || ""}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, message: e.target.value }))
                }
                cols={10}
                rows={3}
              />
            </div>
            <Button
              onClick={handleSummit}
              text="Gửi liên hệ"
              textColor="text-white"
              bgColor="bg-blue-600"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
