
import React,{memo} from 'react';
const InputForm=({label, value, setValue, type})=>{
    return(
        <div>
            <label htmlFor='phone'className='text-xs' >{label}</label>
            <input type='text' id='phone'  className='outline-none bg-[#e8f0fe] rounded-md w-full'
            value={value}
            onChange={(e)=> setValue(prev=>({...prev,[type]: e.target.value}))}/>
        </div>
    )
}
export default memo(InputForm);