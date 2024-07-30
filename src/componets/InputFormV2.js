import React from "react";

const InputFormV2 = ({ label, unit, value, setValue, name, small }) => {
  return (
    <div>
      <label htmlFor="title">{label}</label>
      <div className="flex justify-center">
        <input
          id="title"
          type="text"
          className={`flex-auto ${
            unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
          } outline-none border border-gray-200 p-2`}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
        />
        {unit && (
          <span className="p-2 bg-gray-300 border flex-none w-16 flex items-center justify-center rounded-tr-md rounded-br-md ">
            {unit}
          </span>
        )}
      </div>
      {small && <small className="opacity-70">{small}</small>}
    </div>
  );
};

export default InputFormV2;
