import React, { useEffect, useState } from 'react'
import {PageNumber} from '../../componets/index'
import {useSelector} from 'react-redux'
import icons from '../../ultils/icons'
const Pagination = ({page}) => {
    const {TbPlayerTrackNext,TbPlayerTrackPrev}= icons
    const {count,posts}= useSelector(state=> state.post)
    const [arrPage, setArrPage]= useState([])
    const [currentPage, setCurrentPage]=useState(+page || 1)
    const [isHideEnd, setIsHideEnd]= useState(false)
    const [isHideStart, setIsHideStart]= useState(false)

    useEffect(()=>{
        let maxpage= Math.floor(count/posts.length)
        let start = (currentPage-1) <1 ? 1: (currentPage-1)
        let end = (currentPage+1) >maxpage ? maxpage: (currentPage+1)
        let temp=[]
        for (let i = start; i <= end; i++) {
            temp.push(i)
        }
        setArrPage(temp)
        currentPage+1 >=16 ? setIsHideEnd(true) : setIsHideEnd(false)
        currentPage-1 <2 ? setIsHideStart(true) : setIsHideStart(false)

    },[count,posts,currentPage])
  return (
    <div className='flex items-center justify-center gap-2 py-5'>
        {!isHideStart && <PageNumber icon={<TbPlayerTrackPrev/>} setCurrentPage={setCurrentPage} text={1}/>}
        {!isHideStart && <PageNumber text={'...'}/>}
        {arrPage.length>0 && arrPage.map((i)=>{
            return (
                <PageNumber key={i} text={i} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            )
        })}
        {!isHideEnd && <PageNumber text={'...'}/>}
        {!isHideEnd && <PageNumber icon={<TbPlayerTrackNext/>}  setCurrentPage={setCurrentPage} text={Math.floor(count/posts.length)}/>}
    </div>
  )
}

export default Pagination