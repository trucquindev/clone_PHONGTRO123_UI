import React, { useState } from 'react'
import icons from '../ultils/icons'

const {GrLinkPrevious}= icons
const Model = ({setIsShowModel, content, name}) => {
    const [persent1, setPersent1] = useState(0)
    const [persent2, setPersent2] = useState(100)
  return (
    <div 
    onClick={()=>{setIsShowModel(false)}} 
    className='fixed top-0 left-0 right-0 bottom-0 bg-overlay-30 z-10 flex items-center justify-center'>
        <div 
            onClick={(e)=>{
                e.stopPropagation(); // chong noi bot
                setIsShowModel(true)
            }}
            className='w-1/3 bg-white rounded-md'
        >
            <div className='h-[45px] px-4 flex items-center border-b border-gray-300'>
                <span 
                onClick={(e)=>{
                e.stopPropagation(); // chong noi bot
                setIsShowModel(false)
                }}
                className='hover:text-red-500 cursor-pointer'
                ><GrLinkPrevious size={24}/></span>
                <h3 className=''>CHỌN TỈNH THÀNH</h3>
            </div>
            {(name === 'categories' || name ==='provinces') && 
            <div className='p-4 flex flex-col'>
                {content?.map(item=>{
                    return (
                        <span key={item.code} className='py-2 flex gap-2 items-center border-b border-gray-200'>
                            <input type='radio' name={name} id={item.code} value={item.code}/>
                            <label htmlFor={item.code}>{item.value}</label>
                        </span>
                    )
                })}
            </div>}
            {(name==='prices' || name ==='areas') && 
            <div className='p-12'>
                <div className='flex flex-col items-center justify-center relative' >
                <div className='slider-track h-[5px] bg-red-500 absolute top-0 bottom-0 w-4/5'></div> 
                    <input 
                        type='range'
                        max='100'
                        min='0'
                        step='5'
                        value={persent1}
                        className='w-4/5 appearance-none pointer-events-none absolute top-0 bottom-0'
                        onChange={(e)=> setPersent1(e.target.value)}
                    />  
                    <input 
                        type='range'
                        max='100'
                        min='0'
                        step='5'
                        value={persent2}
                        className='w-4/5 appearance-none pointer-events-none absolute top-0 bottom-0'
                        onChange={(e)=> setPersent2(e.target.value)}
                    />
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Model
