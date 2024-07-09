import React, { useEffect } from 'react'
import {text} from '../../ultils/constain'
import { Province,ItemSideBar } from '../../componets'
import {List, Pagination} from './index'
import { useSelector ,useDispatch} from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import * as action from '../../store/actions'
const Homepage = () => {
  const [params]= useSearchParams()
  const {categories,prices,areas} = useSelector(state=> state.app)
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(action.getPrices())
    dispatch(action.getAreas())
  },[])
  return (
    <div className='border border-red-500 w-full flex flex-col gap-3'>  
      <div>
        <h1 className='text-[28px] font-bold flex justify-center'>{text.HOME_TITLE}</h1>
        <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province/>
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List />
          <Pagination/>
          <div className='h-[500px]'></div>
        </div>
        <div className='w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center'>
          <ItemSideBar content={categories} title='Danh mục cho thuê'/>
          <ItemSideBar content={prices} type='priceCode' title='Xem theo giá' isDouble={true}/>
          <ItemSideBar content={areas} title='Xem theo diện tích' isDouble={true}/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
