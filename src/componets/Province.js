import React from 'react'
import { ProvinceBtn } from './index'
import { location } from '../ultils/constain'
const Province = () => {
  return (
    <div className='flex items-center gap-5 justify-center py-5'>
        {location.map((item)=>{
          return (
            <ProvinceBtn name={item.name} image={item.image} key={item.name}/>
          )
        })}
      </div>
  )
}

export default Province
