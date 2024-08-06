import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";
import Swal from "sweetalert2";
import { apiDeletePost } from "../../services";
import { Button, UpdatePost } from "../../componets";
const ManagePost = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState("0");
  const [post, setPost] = useState([]);
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    setPost(posts);
  }, [posts]);
  useEffect(() => {
    dispatch(actions.getPostById());
  }, [isEdit]);
  const checkStatus = (datetime) =>
    moment(datetime, process.env.REACT_APP_FORMAT_DAY).isSameOrAfter(
      new Date().toDateString()
    );

  const handleDeletedPost = async (postId) => {
    const response = await apiDeletePost(postId);

    if (response.data.err === 0) {
      dispatch(actions.getPostById());
    } else {
      Swal.fire("Oops !", "Error deleting post", "error");
    }
  };
  useEffect(() => {
    if (status === 1) {
      const activePost = post.filter((item) =>
        checkStatus(item?.overviews?.expire?.split(" ")[2])
      );
      setPost(activePost);
    } else if (status === 2) {
      const expiredPost = post.filter(
        (item) => !checkStatus(item?.overviews?.expire?.split(" ")[2])
      );
      setPost(expiredPost);
    } else {
      setPost(posts);
    }
  }, [status]);
  return (
    <div className="">
      <div className=" border-b border-gray-200 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-medium">Quản lý tin đăng</h1>
        <select
          onChange={(e) => setStatus(+e.target.value)}
          value={status}
          className="outline-none border border-gray-200 rounded-md p-1 "
        >
          <option value="0">Lọc theo trạng thái</option>
          <option value="1">Đang hoạt động</option>
          <option value="2">Đã hết hạn</option>
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
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tùy chọn
            </th>
          </tr>
        </thead>
        <tbody>
          {post?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="text-center border p-2">
                  {item?.overviews?.code}
                </td>
                <td className="border p-1 w-36 h-10 object-cover">
                  <img
                    className="w-36 h-20"
                    src={JSON.parse(item?.images?.image)[0] || ""}
                    alt="avatar"
                  />
                </td>
                <td className="text-center border p-2 ">{`${item?.title.slice(
                  0,
                  30
                )}...`}</td>
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
                  {checkStatus(item?.overviews?.expire?.split(" ")[2])
                    ? "Đang hoạt đông"
                    : "Đã hết hạn"}
                </td>
                <td className="text-center border p-2 flex justify-between items-center h-[90px]">
                  <Button
                    onClick={() => {
                      dispatch(actions.editData(item));
                      setIsEdit(true);
                    }}
                    text="Sửa"
                    bgColor="bg-green-600"
                    textColor="text-white"
                  />
                  <Button
                    text="Xóa"
                    onClick={() => handleDeletedPost(item.id)}
                    bgColor="bg-red-600"
                    textColor="text-white"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} isEdit={isEdit} />}
    </div>
  );
};

export default ManagePost;
