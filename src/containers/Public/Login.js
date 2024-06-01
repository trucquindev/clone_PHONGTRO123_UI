
import React, { useEffect } from 'react';
import { useState } from 'react';
import { InputForm,Button } from '../../componets';
import { apiRegester } from '../../services/auth';
import { useLocation } from 'react-router-dom';
const Login=()=>{
    const location = useLocation();
    const [isRegister, setisRegister]= useState(location.state?.flag);
    const [payload, setPayload]= useState({
        name:'',
        phone:'',
        password:''
    })
    useEffect(()=>{
        setisRegister(location.state?.flag)
    },[location.state?.flag])
    const handleSummit=async ()=>{
        console.log(payload)
        const response = apiRegester(payload)
        console.log(response)
    }
    return(
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-4'>
            <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng ký':"Đăng nhập"}</h3>
            <div className='w-full flex flex-col gap-5 '>
                {isRegister && <InputForm label={"Họ tên"} value={payload.name} setValue={setPayload} type={'name'}/>}
                <InputForm label={"Số điện thoại"} value={payload.phone} setValue={setPayload} type={'phone'}/>
                <InputForm label={"Mật khẩu"} value={payload.password} setValue={setPayload} type={'password'}/>
                <Button 
                text={isRegister ? "Đăng ký":'Đăng nhập'}
                bgColor='bg-secondary1'
                textColor='text-white'
                fullWidth
                onClick={handleSummit}
                />
            </div>
            <div className='mt-7 flex items-center justify-between'>
                {isRegister? <small> Bạn đã có tài khoản ? <span onClick={()=>{setisRegister(false)}} className='text-blue-500 hover:underline cursor-pointer'>Đăng nhập ngay</span></small> :
                <>
                    <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn quên mật khẩu</small>
                    <small className='text-[blue] hover:text-[red] cursor-pointer' onClick={()=>{setisRegister(true)}}>Tạo mới tài khoản</small>
                </>}
            </div>
        </div>
        
    )
}
export default Login;