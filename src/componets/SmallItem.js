import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
const SmallItem = ({ title, price, image, createdAt}) => {
  return (
    <div className='w-full flex items-center gap-1 py-2 border-b border-gray-300'>
      <img 
        src={image} 
        alt='thumbnal'
        className='w-[65px] h-[65px] flex-none object-cover rounded-md'
      />
      <div className='w-full flex-auto flex-col justify-between'>
        <h4 className='text-blue-600 text-[14px] mb-2'>{`${title?.slice(0,1)}${title?.toLowerCase().slice(1,40)}...`}</h4>
        <div className='flex items-center justify-between w-full'>
            <span className='font-medium text-[11px] text-green-500'>{price}</span>
            <span className='text-[11px] text-gray-300'>{moment(createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  )
}

export default SmallItem
