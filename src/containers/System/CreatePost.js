import React from "react";
import { Overview, Address } from "../../componets";
const CreatePost = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl border-b border-gray-200 py-4">Đăng tin mới</h1>
      <div className="flex gap-4 ">
        <div className="py-4 flex flex-col gap-4 flex-auto">
          <Address />
          <Overview />
        </div>
        <div className="w-[30%] flex-none">mapp</div>
      </div>
    </div>
  );
};

export default CreatePost;
