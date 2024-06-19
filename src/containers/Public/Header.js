import React, {useCallback, useEffect, useRef} from 'react';
import logo from '../../assets/logowithoutbg.png'
import { Button } from '../../componets';
import icons from '../../ultils/icons';
import { useNavigate,Link ,useSearchParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions'

import { path } from '../../ultils/constain';
const { BsPlusCircleDotted}=icons
const Header=()=>{
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const headerRef= useRef()
    const [searchParams]= useSearchParams()
    const {isLoggedIn}= useSelector(state=>state.auth)
    const goLogin = useCallback((flag)=>{
        navigate(path.LOGIN,{state:{flag}})
    },[navigate])

    useEffect(()=>{
        headerRef.current.scrollIntoView({behavior:'smooth', block:'start'})
    },[searchParams.get('page')])
    return(
        <div ref={headerRef} className="w-3/5">
            <div className='w-full flex items-center justify-between'>
                <Link to={'/'}><img src={logo}
                    alt='logo'
                    className='w-[240px] h-[70px] object-container'
                /></Link>
                <div className='flex items-center gap-1'>
                    {
                        !isLoggedIn &&
                        <div className='flex items-center gap-1'>
                        <small>Phongtro123.com xin chào !</small>
                        <Button 
                            text={'Đăng nhập'} 
                            textColor='text-white' 
                            bgColor='bg-[#3961fb]'
                            onClick={()=>{goLogin(false)}}/>
                        <Button 
                            text={'Đăng ký'} 
                            textColor='text-white' 
                            bgColor='bg-[#3961fb]'
                            onClick={()=>{goLogin(true)}}/>
                        </div>
                    }
                    {
                        isLoggedIn &&
                        <div className='flex items-center gap-1'>
                        <small>Phongtro123.com xin chào tên!</small>
                        <Button 
                            text={'Đăng xuất'} 
                            textColor='text-white' 
                            bgColor='bg-red-700'
                            onClick={()=>dispatch(actions.logout())}
                            />
                        </div>
                    }
                    <Button 
                        text={'Đăng tin mới'} 
                        textColor='text-white' 
                        bgColor='bg-secondary2' 
                        IcAfter={BsPlusCircleDotted}
                        />
                </div>
            </div>
        </div>
    )
}
export default Header;