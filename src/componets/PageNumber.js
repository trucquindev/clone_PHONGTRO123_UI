import React, { memo } from 'react'
import { createSearchParams, useNavigate } from "react-router-dom";
const active= 'w-[46px] h-[48px] flex items-center justify-center bg-[#E13427] text-white  rounded-md'
const notActive= 'w-[46px] h-[48px] flex items-center justify-center bg-white rounded-md'
const PageNumber = ({text,currentPage,icon, setCurrentPage, type}) => {
  const navigate= useNavigate()
  const handleChangePage= ()=>{
    if(text!='...'){
      setCurrentPage(+text)
      navigate({
        pathname: "/",
        search: createSearchParams({
            page: text,
        }).toString()
      });
    }
  }
  return (
    <div className={+text=== +currentPage ? `${active} ${text==='...'? 'cursor-text': 'cursor-pointer hover:opacity-75'}` : `${notActive} ${text==='...'? 'cursor-text': 'cursor-pointer hover:bg-gray-300'}`}
      onClick={handleChangePage}
    >
      {icon || text}
    </div>
  )
}

export default memo(PageNumber)
