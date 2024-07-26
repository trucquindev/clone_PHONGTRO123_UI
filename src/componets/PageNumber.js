import React, { memo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
const active =
  "w-[46px] h-[48px] flex items-center justify-center bg-[#E13427] text-white  rounded-md";
const notActive =
  "w-[46px] h-[48px] flex items-center justify-center bg-white rounded-md";
const PageNumber = ({ text, currentPage, icon, setCurrentPage, type }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  let entries = searchParams.entries();

  const append = (entries) => {
    let params = [];
    searchParams.append("page", +text);
    for (let entry of entries) {
      params.push(entry);
    }
    let searchParamsObject = {};
    params?.forEach((i) => {
      if (
        Object.keys(searchParamsObject)?.some(
          (item) => item === i[0] && item != "page"
        )
      ) {
        searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
      } else {
        searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
      }
    });
    return searchParamsObject;
  };
  const navigate = useNavigate();
  const handleChangePage = () => {
    if (text != "...") {
      setCurrentPage(+text);
      navigate({
        pathname: location.pathname,
        search: createSearchParams(append(entries)).toString(),
      });
    }
  };
  return (
    <div
      className={
        +text === +currentPage
          ? `${active} ${
              text === "..." ? "cursor-text" : "cursor-pointer hover:opacity-75"
            }`
          : `${notActive} ${
              text === "..."
                ? "cursor-text"
                : "cursor-pointer hover:bg-gray-300"
            }`
      }
      onClick={handleChangePage}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
