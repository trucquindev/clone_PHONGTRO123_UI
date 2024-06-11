import React, {useEffect} from 'react'
import { Button,Item } from '../../componets'
import { getPosts } from '../../store/actions/postAction'
import {useDispatch,useSelector} from 'react-redux'
const List = () => {
  const dispatch= useDispatch()
  const {posts} = useSelector(state=>state.post)
  
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md'>
      <div className='flex items-center justify-between my-3'>
        <h4 className='text-base font-semibold'>Danh sách tin đăng</h4>
        <span className='text-xs'>Cap nhat ngay 11/06/2024</span>
      </div>
      <div className='flex items-center gap-2 text-[12px] my-2'>
        <span>
            Sắp xếp:
        </span >
        <Button bgColor='bg-gray-200' text='Mặc định'/>
        <Button bgColor='bg-gray-200' text='Mới nhất'/>
      </div>
      <div className='items'>
        {posts?.length > 0 && posts.map(item=>{
          return (
            <Item 
              key={item.id}
              address={item?.address}
              attributes={item?.attributes}
              description={JSON.parse(item?.description)}
              images={JSON.parse(item?.images?.image)}
              star={+item?.star}
              title={item?.title}
              user={item?.user}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List
