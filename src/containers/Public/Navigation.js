import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import {apiGetCategory} from '../../services/category'
import { formatVietNameseToString } from "../../ultils/constain";
const notActive='hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const active='hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2'
const Navigation=()=>{
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        const fetchApiCategory=async()=>{
            const response = await apiGetCategory()
            if(response?.data.err===0){
                setCategories(response.data.response)
            }
        }
        fetchApiCategory()
    },[])
    return (
        <div className="w-screen flex justify-center items-center h-[40px] bg-secondary1 text-white">
            <div className="w3/5 flex h-full items-center text-sm font-medium">
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