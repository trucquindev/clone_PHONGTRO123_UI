import React from 'react'
import { text } from '../ultils/dataContact'
import {Button} from'../componets/index'
const Contact = () => {
  return (
    <div className='w-3/5 border border-red-400 bg-white rounded-md shadow-md p-4 gap-6 flex flex-col justify-center items-center'>
      <img 
      src={text.image} 
      alt='thumbnal'
      className='w-full h-48 object-contain'/>
      <p>{text.content}</p>
      <div className='flex flex-row justify-around items-center w-full'>
        {text.contact.map((item,index)=>{
          return (
            <div key={index} className='flex flex-col items-center'>
              <span className='text-orange-500 font-semibold text-[13px]'>{item.text}</span>
              <span className='text-blue-900 text-[16px] font-semibold'>{item.phone}</span>
              <span className='text-blue-900 text-[16px] font-semibold'>{item.zalo}</span>
            </div>
          )
        })}
        <Button bgColor='bg-secondary1' text='Gửi liên hệ' textColor='text-white' px='px-6'/>
      </div>
    </div>
  )
}

export default Contact
