import React from "react";

const InputReadOnly = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="exactly-address" className="font-medium">
        {label}
      </label>
      <input
        type="text"
        id="exactly-address"
        readOnly
        className="border border-gray-200 rounded-md bg-gray-100 p-2 w-full outline-none"
        value={value}
      />
    </div>
  );
};

export default InputReadOnly;
