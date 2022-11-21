import React from 'react'
import pr from '../img/pr.png'
const Birthday = () => {
  return (
    <div>
        <div className='font-bold w-[98%] h-[40px]'>Birthday</div>        
        <div className='w-[98%] h-[auto] flex flex-row'>
            <img 
            className='w-[30px] h-[32px] mr-[15px]'
            src={pr}/>
            <span className='text-[14px] text-slate-300'>
                <span className='font-bold text-[white]'>Yair Min Oo</span> and <span className='font-bold text-[white]'>Bhone Htet</span> have their birthdays today.                
            </span>
        </div>

    </div>
  )
}

export default Birthday