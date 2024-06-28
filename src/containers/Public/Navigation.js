import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { formatVietNameseToString } from "../../ultils/common/formatVietNamese";
import {useDispatch ,useSelector} from 'react-redux'
import * as action from '../../store/actions'


const notActive='hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const active='hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2'
const Navigation=()=>{
    const dispatch = useDispatch()
    const {categories}= useSelector(state=>state.app)
    useEffect(()=>{
        dispatch(action.getCategories())
    },[])
    return (
        <div className="w-full flex justify-center items-center h-[40px] bg-secondary1 text-white">
            <div className="w3/5 flex h-[40px] items-center text-sm  font-medium">
                <NavLink to={'/'}
                            className={({isActive})=> isActive ? active:notActive}>
                                Trang chủ
                </NavLink>
                {categories?.length>0 && categories.map((item)=>{
                    return(
                        <div key={item.code} className="h-full flex justify-center items-center">
                            <NavLink to={`${formatVietNameseToString(item.value)}`}
                            className={({isActive})=> isActive ? active:notActive}>
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation