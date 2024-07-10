import React ,{useEffect} from 'react'
import {SmallItem} from './index'
import * as actions from '../store/actions'
import {useDispatch, useSelector} from'react-redux'
const RelatedPost = () => {
  const dispatch = useDispatch()
  const {posts}= useSelector(state=>state.post)
  useEffect(()=>{
    dispatch(actions.getNewPosts())
  },[])
  return (
    <div className='w-full bg-white rounded-md p-4'>
      <h3 className='font-semibold text-lg mb-4'>Tin mới đăng</h3>
      <div className='w-full flex flex-col gap-2'>
        {posts?.length >0 && posts.map((item,index)=>{
          
          return (
            <SmallItem image={JSON.parse(item?.images?.image)[0]} key={index} title={item.title} createdAt={item?.createdAt} price={item?.attributes?.price}/>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedPost
