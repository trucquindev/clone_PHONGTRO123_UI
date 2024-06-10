
import React,{memo} from 'react';
const InputForm=({label, value, setValue, typePayload, invaliableFiles, setInvaliableFiles,type})=>{
    return(
        <div>
            <label htmlFor='phone'className='text-xs' >{label}</label>
            <input type={type || 'text'} id='phone'  className='outline-none bg-[#e8f0fe] rounded-md w-full'
            value={value}
            onChange={(e)=> setValue(prev=>({...prev,[typePayload]: e.target.value}))}
            onFocus={()=>setInvaliableFiles([])}/>
            {invaliableFiles.length>0 && invaliableFiles.some((item)=>item.name=== typePayload) && <small className='text-red-500 italic'> {invaliableFiles.find(i=>i.name===typePayload)?.massage}</small>}
        </div>
    )
}
export default memo(InputForm);