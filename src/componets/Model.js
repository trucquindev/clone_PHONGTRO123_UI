import React, { useState, useEffect, memo } from "react";
import icons from "../ultils/icons";
import { getNumbers } from "../ultils/common/getNumber";
import { getCodes, getCodesArea } from "../ultils/common/getCodes";
const { GrLinkPrevious } = icons;
const Model = ({
  setIsShowModel,
  content,
  name,
  handleSummit,
  queries,
  arrMinMax,
}) => {
  const [persent1, setPersent1] = useState(() => {
    if (name === "prices" && arrMinMax?.pricesArr) {
      return arrMinMax.pricesArr[0];
    } else if (name === "areas" && arrMinMax?.areasArr) {
      return arrMinMax.areasArr[0];
    } else {
      return 0;
    }
  });
  const [persent2, setPersent2] = useState(() => {
    if (name === "prices" && arrMinMax?.pricesArr) {
      return arrMinMax.pricesArr[1];
    } else if (name === "areas" && arrMinMax?.areasArr) {
      return arrMinMax.areasArr[1];
    } else {
      return 100;
    }
  });
  const [activeEl, setActiveEl] = useState("");
  useEffect(() => {
    const trackActiveEle = document.getElementById("trackActive");
    if (name === "prices" || name === "areas") {
      if (persent2 <= persent1) {
        trackActiveEle.style.left = `${persent2}%`;
        trackActiveEle.style.right = `${100 - persent1}%`;
      }
      if (persent2 > persent1) {
        trackActiveEle.style.left = `${persent1}%`;
        trackActiveEle.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

  const handleChangeThumb = (e) => {
    e.stopPropagation();
    const stackEl = document.getElementById("track");
    const trackReact = stackEl.getBoundingClientRect();
    let percent = Math.round(
      ((e.clientX - trackReact.left) * 100) / trackReact.width
    );
    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      setPersent1(percent);
    } else {
      setPersent2(percent);
    }
    activeEl && setActiveEl("");
  };
  const convert100toTager = (percent) => {
    return name === "prices"
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === "areas"
      ? Math.ceil(Math.round((percent * 90) / 100) / 5) * 5
      : 1;
  };
  const convertTo100 = (percent) => {
    let target = name === "prices" ? 15 : name === "areas" ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };
  const handleChangeActive = (code, value) => {
    setActiveEl(code);
    let arr = getNumbers(value);
    if (arr.length === 1) {
      if (arr[0] === 1) {
        setPersent1(0);
        setPersent2(convertTo100(1));
      } else if (arr[0] === 15) {
        setPersent1(100);
        setPersent2(100);
      }
      if (arr[0] === 20) {
        setPersent1(0);
        setPersent2(convertTo100(20));
      } else if (arr[0] === 90) {
        setPersent1(100);
        setPersent2(100);
      }
    } else {
      setPersent1(convertTo100(arr[0]));
      setPersent2(convertTo100(arr[1]));
    }
  };
  const handleBeforSubmit = (e) => {
    const gaps =
      name === "prices"
        ? getCodes(
            [convert100toTager(persent1), convert100toTager(persent2)],
            content
          )
        : name === "areas"
        ? getCodesArea(
            [convert100toTager(persent1), convert100toTager(persent2)],
            content
          )
        : [];
    handleSummit(
      e,
      {
        [`${name}Code`]: gaps?.map((item) => item.code),
        [name]: `Từ ${convert100toTager(persent1)} - ${convert100toTager(
          persent2
        )} ${name === "areas" ? "m2" : "triệu"}`,
      },
      {
        [`${name}Arr`]: [persent1, persent2],
      }
    );
  };
  return (
    <div
      onClick={() => {
        setIsShowModel(false);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-30 z-10 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation(); // chong noi bot
          setIsShowModel(true);
        }}
        className="w-2/4 bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-300">
          <span
            onClick={(e) => {
              e.stopPropagation(); // chong noi bot
              setIsShowModel(false);
            }}
            className="hover:text-red-500 cursor-pointer"
          >
            <GrLinkPrevious size={24} />
          </span>
          <h3 className="">CHỌN TỈNH THÀNH</h3>
        </div>
        {(name === "categories" || name === "provinces") && (
          <div className="p-4 flex flex-col">
            {content?.map((item) => {
              return (
                <span
                  key={item.code}
                  className="py-2 flex gap-2 items-center border-b border-gray-200"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item.code}
                    value={item.code}
                    defaultChecked={
                      item.code === queries[`${name}Code`] ? true : false
                    }
                    onClick={(e) =>
                      handleSummit(e, {
                        [name]: item.value,
                        [`${name}Code`]: item.code,
                      })
                    }
                  />
                  <label htmlFor={item.code}>{item.value}</label>
                </span>
              );
            })}
          </div>
        )}
        {(name === "prices" || name === "areas") && (
          <div className="p-12">
            <div className="flex flex-col items-center justify-center relative transition-all">
              <div className="z-20 absolute top-[-38px] font-semibold text-lg text-orange-400">
                {persent1 === 100 && persent2 === 100
                  ? `Trên ${convert100toTager(persent1)} ${
                      name === "prices" ? "triệu" : "m2"
                    }+`
                  : `${persent1 === 100 && persent2 === 100 ? "Trên" : "Từ"} ${
                      persent1 <= persent2
                        ? convert100toTager(persent1)
                        : convert100toTager(persent2)
                    } - ${
                      persent1 >= persent2
                        ? convert100toTager(persent1)
                        : convert100toTager(persent2)
                    } ${name === "prices" ? "triệu" : "m2"}`}
              </div>
              <div
                id="track"
                onClick={handleChangeThumb}
                className="slider-track h-[5px] bg-gray-300 rounded-md absolute top-0 bottom-0 w-full"
              ></div>
              <div
                id="trackActive"
                onClick={handleChangeThumb}
                className="slider-track-active h-[5px] bg-orange-500 rounded-md absolute top-0 bottom-0 "
              ></div>
              <input
                type="range"
                max="100"
                min="0"
                step="1"
                value={persent1}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPersent1(+e.target.value);
                  activeEl && setActiveEl("");
                }}
              />
              <input
                type="range"
                max="100"
                min="0"
                step="1"
                value={persent2}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPersent2(+e.target.value);
                  activeEl && setActiveEl("");
                }}
              />
              <div className="z-40 absolute top-6 left-0 right-0 flex justify-between items-center">
                <span
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // chong noi bot
                    setPersent1(0);
                  }}
                >
                  0
                </span>
                <span
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // chong noi bot
                    setPersent2(100);
                  }}
                >
                  {name === "prices"
                    ? "15 triệu+"
                    : name === "areas"
                    ? "Trên 90 m2"
                    : ""}
                </span>
              </div>
            </div>
            <div className="mt-16">
              <h4 className="mb-2 font-medium">Chọn nhanh</h4>
              <div className="flex gap-2 items-center flex-wrap w-full ">
                {content?.map((item) => {
                  return (
                    <span
                      key={item.code}
                      className={`px-4 rounded-md cursor-pointer ${
                        item.code === activeEl
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300"
                      }`}
                      onClick={() => handleChangeActive(item.code, item.value)}
                    >
                      {item.value}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {(name === "prices" || name === "areas") && (
          <button
            type="button"
            className="w-full font-medium bg-orange-400 py-2 rounded-bl-md rounded-br-md"
            onClick={handleBeforSubmit}
          >
            ÁP DỤNG
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(Model);