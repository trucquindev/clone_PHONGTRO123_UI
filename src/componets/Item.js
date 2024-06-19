import React, { memo, useState } from 'react'
import icons from '../ultils/icons'
import { useNavigate, Link} from 'react-router-dom'
import {formatVietNameseToString} from '../ultils/common/formatVietNamese'
const indexs=[0,1,2,3]
const { MdOutlineStar,BsSuitHeart,BsFillSuitHeartFill}=icons
const Item = ({images,user,title,star,description, attributes, address, id}) => {
    const [isHoverHeart, setIsHoverHeart]= useState(false)
    const navigate = useNavigate()
    const handleStart = (star) =>{
        let starts=[]
        for(let i=1; i<=+star;i++) starts.push(<MdOutlineStar className='start-item' size={18} color='yellow'/>)
        return starts
    }
    console.log(handleStart(5));
  return (
    <div className='w-full flex border-t border-orange-700 p-1'>
        <Link to={`chi-tiet/${formatVietNameseToString(title)}/${id}`} className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
            {images.length>0 && images.filter((i,index)=> indexs.some(i=>i===index))?.map((i,index)=>{
                    if(i!== null){
                        return <img src={i} alt='privew' key={index} className='w-[110px] h-[115px] object-cover'/>
                    }
            })}
            
            <span className='bg-overlay-70 text-white text-[14px] px-2 rounded-sm absolute bottom-2 left-1'>{`${images.length} ảnh`}</span>
            <span 
                className='text-white absolute bottom-2 right-2'
                onMouseEnter={()=>{
                    setIsHoverHeart(true)
                }}
                onMouseLeave={()=>{
                    setIsHoverHeart(false)
                }}
            >
                {isHoverHeart ? <BsFillSuitHeartFill size={22} color='pink'/> :<BsSuitHeart size={22}/> }
            </span>
        </Link>
        <div className='w-3/5'>
            <div className='flex justify-between gap-4 w-full'>
                <div className='text-red-600 font-medium'>
                    {handleStart(+star).length > 0 && handleStart(+star).map((star, number)=>{
                        return (
                            <span key={number}>{star}</span>
                        )
                    })}
                    {title}
                </div>
            </div>
            <div className='my-2 flex items-center justify-between'>
                <span className='font-bold flex-3 text-green-500 text-md whitespace-nowrap text-ellipsis overflow-hidden'>{attributes?.price}</span>
                <span className='text-[14px] flex-1'>{attributes?.acreage}</span>
                <span className='text-[14px] flex-3 whitespace-nowrap text-ellipsis overflow-hidden'>{`${address.split(',')[address.split(',').length-2]}${address.split(',')[address.split(',').length-1]}`}</span>
            </div>
            <p className='text-gray-500 text-[12px] w-full line-clamp-3'>
                {description}
            </p>
            <div className='flex items-center my-3 justify-between'>
                <div className='flex items-center'>
                    <img src='https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png' alt='avatar' className='w-[30px] h-[30px] object-cover rounded-full'/>
                    <p className='text-[14px] px-2'>{user?.name}</p>
                </div>
                <div className='flex items-center text-[10px] gap-2'>
                    <button
                        type='button'
                        className='bg-blue-700 text-white py-[3px] px-[7px] rounded-md'
                    >
                        {`Gọi ${user?.phone}`}
                    </button>
                    <button
                        type='button'
                        className='text-blue-700 py-[3px] px-[7px] border border-blue-700 rounded-md'
                    >
                        Nhắn Zalo
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Item)
