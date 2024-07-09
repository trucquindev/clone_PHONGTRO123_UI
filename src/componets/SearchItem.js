import React, { memo } from 'react'

const SearchItem = ({IconBefore, IconAfter, text, fontWeight}) => {
  return (
    <div className='bg-white px-4 py-2 w-full rounded-md text-gray-400 text-[11.5px] flex items-center justify-between cursor-pointer'>
        <div className='flex items-center gap-1 w-full'>
          {IconBefore}
          <span className= {`${fontWeight && 'text-medium text-black '} w-[100px] overflow-hidden text-ellipsis whitespace-nowrap`}>{text}</span>
        </div>
        {IconAfter}
    </div>
  )
}

export default memo(SearchItem)
