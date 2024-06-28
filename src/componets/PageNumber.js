import React, { memo } from 'react'
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
const active= 'w-[46px] h-[48px] flex items-center justify-center bg-[#E13427] text-white  rounded-md'
const notActive= 'w-[46px] h-[48px] flex items-center justify-center bg-white rounded-md'
const PageNumber = ({text,currentPage,icon, setCurrentPage, type}) => {
  const [searchParams] = useSearchParams()
  let entries= searchParams.entries()

  const append= (entries)=>{
    let params= [ ]
    searchParams.append('page',+text)
    for(let entry of entries){
      params.push(entry)
    }
    let a={}
    params?.map(i=>{
      a={...a,[i[0]]:i[1]}
    })
    return a
  }
  const navigate= useNavigate()
  const handleChangePage= ()=>{
    if(text!='...'){
      setCurrentPage(+text)
      navigate({
        pathname: "/",
        search: createSearchParams(append(entries)).toString()
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
