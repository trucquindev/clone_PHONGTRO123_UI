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
  derection,
}) => {
  return (
    <div className={`flex ${derection ? derection : "flex-col"}`}>
      <label className="w-48 flex-none" htmlFor="title">
        {label}
      </label>
      <div className="flex flex-auto flex-col items-center">
        <div className="flex w-full items-center">
          <input
            id="title"
            type="text"
            className={`flex-auto ${
              unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
            } outline-none border flex-auto border-gray-200 p-2`}
            value={value}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [name]: e.target.value }))
            }
            onFocus={() => setInvaliableFiles && setInvaliableFiles([])}
          />
          {unit && (
            <span className="p-2 bg-gray-300 border flex-none w-16 flex items-center justify-center rounded-tr-md rounded-br-md ">
              {unit}
            </span>
          )}
        </div>
        {invaliableFiles?.some((item) => item.name === name) && (
          <small className="text-red-400 block w-full">
            {invaliableFiles?.find((item) => item.name === name)?.massage}
          </small>
        )}
      </div>
      {small && <small className="opacity-70">{small}</small>}
    </div>
  );
};

export default InputFormV2;
