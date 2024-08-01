import React from "react";

const InputFormV2 = ({
  label,
  unit,
  value,
  setValue,
  name,
  small,
  invaliableFiles,
  setInvaliableFiles,
}) => {
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
          onFocus={() => setInvaliableFiles([])}
        />
        {unit && (
          <span className="p-2 bg-gray-300 border flex-none w-16 flex items-center justify-center rounded-tr-md rounded-br-md ">
            {unit}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        {small && <small className="opacity-70">{small}</small>}
        <small className="text-red-400">
          {invaliableFiles?.some((item) => item.name === name) &&
            invaliableFiles?.find((item) => item.name === name)?.massage}
        </small>
      </div>
    </div>
  );
};

export default InputFormV2;
