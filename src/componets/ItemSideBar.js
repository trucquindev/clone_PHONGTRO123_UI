import React, { memo } from 'react'
import icons from '../ultils/icons'
import { formatVietNameseToString } from '../ultils/common/formatVietNamese'
import { Link } from 'react-router-dom'
import * as actions from '../store/actions'
import { createSearchParams,useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from'react-redux'
const {GrNext}= icons
const ItemSideBar = ({title,content,isDouble,type}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const formatContent =()=>{
    const oddEl= content?.filter((item,index)=>index%2!==0)
    const evenEl= content?.filter((item,index)=>index%2===0)
    const formatContent= oddEl?.map((item,index)=>{
      return {
        left: evenEl?.find((itemEven,indexEven)=>indexEven===index),
        right:item
      }
    })
    return formatContent
  }
  const handleFilterPost=(code)=>{
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
          [type]: code
      }).toString()
    });
  }
  return (
    <div className='p-4 rounded-md bg-white w-full '>
      <h3 className='text-lg font-semibold mb-3'>{title}</h3>
      {!isDouble && 
        <div className='flex flex-col gap-2'>
          {content?.length > 0 && content.map((item)=>{
              return (
                <Link 
                key={item.code} 
                className='flex gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-dashed border-gray-200 pb-1'
                to={`${formatVietNameseToString(item.value)}`}>
                  <GrNext size={12} color='#ccc'/>
                  <p className='text-[12px]'>{item.value}</p>
                </Link>
              )
          })}
        </div>
      }
      {isDouble && 
        <div className='flex flex-col gap-2'>
          {content?.length > 0 && formatContent(content).map((item,index)=>{
              return (
                <div key={index} className=''>
                  <div className='flex items-center justify-around'>
                    <div 
                    onClick={()=>handleFilterPost(item.left.code)}
                    className='flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-dashed border-gray-200 pb-1'>
                      <GrNext size={12} color='#ccc'/>
                      <p className='text-[12px]'>{item.left.value}</p>
                    </div>
                    <div 
                    onClick={()=>handleFilterPost(item.right.code)}
                    className='flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-dashed border-gray-200 pb-1'>
                      <GrNext size={12} color='#ccc'/>
                      <p className='text-[12px]'>{item.right.value}</p>
                    </div>
                  </div>
                </div>
              )
          })}
        </div>
      }
    </div>
  )
}

export default memo(ItemSideBar)