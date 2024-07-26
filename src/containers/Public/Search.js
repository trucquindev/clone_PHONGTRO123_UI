import React, { memo, useCallback, useEffect, useState } from "react";
import { Model, SearchItem } from "../../componets";
import icons from "../../ultils/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";
import { path } from "../../ultils/constain";
import { useLocation } from "react-router-dom";
const {
  GrNext,
  PiBuildingApartmentThin,
  FaDeleteLeft,
  IoLocationOutline,
  GiMoneyStack,
  SlCrop,
  IoSearch,
} = icons;
const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowModel, setIsShowModel] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const [arrMinMax, setArrMinMax] = useState({});
  const [defaultText, setDefaultText] = useState("");
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );
  const [queries, setQueries] = useState({});
  useEffect(() => {
    if (!location.pathname.includes(path.SEARCH)) {
      setArrMinMax({});
      setQueries({});
    }
  }, [location]);
  const handleShowModel = (content, name, defaultText) => {
    setContent(content);
    setName(name);
    setDefaultText(defaultText);
    setIsShowModel(true);
  };
  const handleSummit = useCallback(
    (e, query, arrMinMax) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowModel(false);
      arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMinMax }));
    },
    [isShowModel],
    [queries]
  );
  const handleSearch = () => {
    const queriesCode = Object.entries(queries)
      .filter((item) => item[0].includes("Code") || item[0].includes("Number"))
      .filter((item) => item[1]);

    let queriesCodeObject = {};
    queriesCode.forEach((item) => {
      queriesCodeObject[item[0]] = item[1];
    });
    const queriesText = Object.entries(queries)
      .filter(
        (item) => !item[0].includes("Code") || !item[0].includes("Number")
      )
      .filter((item) => item[1]);
    let queriesTextObj = {};
    queriesText.forEach((item) => {
      queriesTextObj[item[0]] = item[1];
    });
    let titleSearch = `${
      queriesTextObj.category ? queriesTextObj.category : "Cho thuê tất cả"
    } ${
      queriesTextObj.province
        ? `khu vực ${queriesTextObj.province.toLowerCase()}`
        : ""
    } ${
      queriesTextObj.price
        ? `có giá ${queriesTextObj.price.replace("-", "đến").toLowerCase()}`
        : ""
    } ${
      queriesTextObj.area
        ? `có diện tích ${queriesTextObj.area
            .replace("-", "đến")
            .toLowerCase()}`
        : ""
    }`;
    navigate(
      {
        pathname: path.SEARCH,
        search: createSearchParams(queriesCodeObject).toString(),
      },
      { state: { titleSearch } }
    );
  };
  return (
    <>
      <div className="p-[10px] w-3/5 my-3  bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() =>
            handleShowModel(categories, "category", "Phòng trọ, nhà trọ")
          }
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<PiBuildingApartmentThin />}
            fontWeight
            IconAfter={<FaDeleteLeft />}
            text={queries.category}
            defaultText={"Phòng trọ, nhà trọ"}
          />
        </span>
        <span
          onClick={() => handleShowModel(provinces, "province", "Toàn quốc")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<IoLocationOutline />}
            IconAfter={<GrNext className="text-gray-300" />}
            text={queries.province}
            defaultText={"Toàn quốc"}
          />
        </span>
        <span
          onClick={() => handleShowModel(prices, "price")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<GiMoneyStack />}
            IconAfter={<GrNext className="text-gray-300" />}
            text={queries.price}
            defaultText={"Chọn giá"}
          />
        </span>
        <span
          onClick={() => handleShowModel(areas, "area")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<SlCrop />}
            IconAfter={<GrNext className="text-gray-300" />}
            text={queries.area}
            defaultText={"Chọn diện tích"}
          />
        </span>
        <button
          type="button"
          className="ontline-none py-2 px-4 flex-1 bg-secondary1 text-sm text-[11.5px] flex place-items-center justify-center gap-2 text-white font-medium"
          onClick={handleSearch}
        >
          <IoSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModel && (
        <Model
          setIsShowModel={setIsShowModel}
          name={name}
          content={content}
          handleSummit={handleSummit}
          queries={queries}
          arrMinMax={arrMinMax}
          defaultText={defaultText}
        />
      )}
    </>
  );
};

export default memo(Search);
