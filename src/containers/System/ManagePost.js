import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { apiGetPostById } from "../../services";
import moment from "moment";
const ManagePost = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPostById());
  }, []);
  const checkStatus = (datetime) => {
    let todayInSeconds = new Date().getTime();
    let expireDayInSeconds = datetime.getTime();
    return todayInSeconds >= expireDayInSeconds
      ? "Đang hoạt động"
      : "Đã hết hạn";
  };
  const { posts } = useSelector((state) => state.post);
  return (
    <div>
      <div className=" border-b border-gray-200 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-medium">Quản lý tin đăng</h1>
        <select className="outline-none border border-gray-200 rounded-md p-1 ">
          <option>Lọc theo trạng thái</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead className="border-2 border-gray-500">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mã tin
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ảnh đại diện
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tiêu đề
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Giá
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ngày bắt đầu
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ngày hết hạn
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trạng thái
            </th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="text-center border p-2">
                  {item?.overviews?.code}
                </td>
                <td className="border p-1 w-36 h-10 object-cover">
                  <img
                    src={JSON.parse(item?.images?.image)[0] || ""}
                    alt="avatar"
                  />
                </td>
                <td className="text-center border p-2 ">{item?.title}</td>
                <td className="text-center border p-2 ">
                  {item?.attributes?.price}
                </td>
                <td className="text-center border p-2 ">
                  {item?.overviews?.created}
                </td>
                <td className="text-center border p-2 ">
                  {item?.overviews?.expire}
                </td>
                <td className="text-center border p-2">
                  {checkStatus(
                    new Date(item?.overviews?.expire?.split(" ")[2])
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePost;
