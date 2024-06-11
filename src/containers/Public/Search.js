import React from 'react'
import {Button, SearchItem} from '../../componets'
import icons from '../../ultils/icons'
const {GrNext,
  PiBuildingApartmentThin,
  FaDeleteLeft,
  IoLocationOutline,
  GiMoneyStack,
  SlCrop,
  IoSearch  } = icons
const Search = () => {
  return (
    <div className='p-[10px] w-3/5 my-3  bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
      <SearchItem IconBefore={<PiBuildingApartmentThin/>} fontWeight IconAfter={<FaDeleteLeft/>} text='Phòng trọ, nhà trọ' />
      <SearchItem IconBefore={<IoLocationOutline/>} IconAfter={<GrNext className='text-gray-300'/>} text='Toàn quốc' />
      <SearchItem IconBefore={<GiMoneyStack/>} IconAfter={<GrNext className='text-gray-300'/>} text='Chọn giá' />
      <SearchItem IconBefore={<SlCrop/>} IconAfter={<GrNext className='text-gray-300'/>} text='Chọn diện tích' />
      <button
        type='button'
        className='ontline-none py-2 px-4 w-full bg-secondary1 text-sm text-[11.5px] flex place-items-center justify-center gap-2 text-white font-medium'
      >
        <IoSearch/>
        Tìm kiếm
      </button>
    </div>
  )
}

export default Search
