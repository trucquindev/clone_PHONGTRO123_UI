import React, { memo, useState } from 'react'
import {Model, SearchItem} from '../../componets'
import icons from '../../ultils/icons'
import { useSelector } from'react-redux'
const {GrNext,
  PiBuildingApartmentThin,
  FaDeleteLeft,
  IoLocationOutline,
  GiMoneyStack,
  SlCrop,
  IoSearch  } = icons
const Search = () => {
  const [isShowModel, setIsShowModel]= useState(false)
  const [content, setContent]= useState([])
  const [name, setName]= useState('')
  const { provinces, areas, prices, categories } = useSelector(state=>state.app)
  const handleShowModel = (content,name) =>{
    setContent(content)
    setName(name)
    setIsShowModel(true)
  }
  
  return (
    <>
      <div className='p-[10px] w-3/5 my-3  bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
        <span onClick={()=>handleShowModel(categories,'categories')} className='cursor-pointer flex-1' >
          <SearchItem IconBefore={<PiBuildingApartmentThin/>} fontWeight IconAfter={<FaDeleteLeft/>} text='Phòng trọ, nhà trọ' />
        </span>
        <span onClick={()=>handleShowModel(provinces,'provinces')} className='cursor-pointer flex-1'>
          <SearchItem IconBefore={<IoLocationOutline/>} IconAfter={<GrNext className='text-gray-300'/>} text='Toàn quốc' />
        </span>
        <span onClick={()=>handleShowModel(prices,'prices' )} className='cursor-pointer flex-1'>
          <SearchItem IconBefore={<GiMoneyStack/>} IconAfter={<GrNext className='text-gray-300'/>} text='Chọn giá' />
        </span>
        <span onClick={()=>handleShowModel(areas,'areas')} className='cursor-pointer flex-1'>
          <SearchItem IconBefore={<SlCrop/>} IconAfter={<GrNext className='text-gray-300'/>} text='Chọn diện tích' />
        </span>
        <button
          type='button'
          className='ontline-none py-2 px-4 flex-1 bg-secondary1 text-sm text-[11.5px] flex place-items-center justify-center gap-2 text-white font-medium'
        >
          <IoSearch/>
          Tìm kiếm
        </button>
      </div>
      {isShowModel && <Model setIsShowModel={setIsShowModel} name={name} content={content}/>}
    </>
  )
}

export default memo(Search)
