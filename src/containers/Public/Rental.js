import React, { useState, useEffect} from 'react'
import {text} from '../../ultils/constain'
import { Province,ItemSideBar,RelatedPost } from '../../componets'
import {List, Pagination} from './index'
import { useSelector, useDispatch } from 'react-redux'
import { formatVietNameseToString } from "../../ultils/common/formatVietNamese";
import { useLocation } from 'react-router-dom'
import * as actions from '../../store/actions'

const Rental = () => {
  const {prices,areas, categories} = useSelector(state=> state.app)
  const location = useLocation()
  const [categoryCode, setCategoryCode]= useState('none') 
  const [categoryCurrent,setCategoryCurrent] = useState('')
  useEffect(() => {
    const category = categories?.find(i=> `/${formatVietNameseToString(i.value)}`=== location.pathname)
    setCategoryCurrent(category)
    if (category){
      setCategoryCode(category.code)
    }
  }, [location])
  return (
    <div className=' w-full flex flex-col gap-3'>  
      <div>
        <h1 className='text-[28px] font-bold flex justify-center'>{categoryCurrent?.header}</h1>
        <p className='text-base text-gray-700'>{categoryCurrent?.subheader}</p>
      </div>
      <Province/>
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List categoryCode={categoryCode}/>
          <Pagination/>
        </div>
        <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
          <ItemSideBar type='priceCode' content={prices} title='Xem theo giá' isDouble={true}/>
          <ItemSideBar type='areaCode' content={areas} title='Xem theo diện tích' isDouble={true}/>
          <RelatedPost/>
        </div>
      </div>
    </div>
  )
}

export default Rental
