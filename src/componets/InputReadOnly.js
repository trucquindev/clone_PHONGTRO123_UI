import React from "react";

const InputReadOnly = ({ label, value, derection, editPhone }) => {
  return (
    <div className={`flex ${derection ? derection : "flex-col gap-2"}`}>
      <label htmlFor="exactly-address" className="font-medium w-48 flex-none">
        {label}
      </label>
      <div className="flex-auto">
        <input
          type="text"
          id="exactly-address"
          readOnly
          className="border border-gray-200 rounded-md bg-gray-100 w-full p-2 outline-none"
          value={value}
        />
        {editPhone && (
          <small className="text-sm text-blue-300 cursor-pointer">
            Sửa số điện thoại
          </small>
        )}
      </div>
    </div>
  );
};

export default InputReadOnly;
