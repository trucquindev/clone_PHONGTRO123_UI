
import React, {memo} from 'react';

const Button=({text,textColor,bgColor,IcAfter, onClick,fullWidth,px})=>{
    return(
        <button
        type='button'
        className={`${px?px:'px-2'} py-1 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1
        ${fullWidth && 'w-full'}`}
        onClick={onClick}
        >
            {text}
            {IcAfter && <IcAfter/>}
        </button>
    )
}
export default memo(Button);