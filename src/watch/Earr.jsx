import React from 'react'

const Earr = () => {
  const lodingArry = [1,2,3,4,5,6,7,8,,9,10,11,12]
  return (     
    <div className=' w-full h-[94vh]  flex flex-col justify-center ' >
        <div className='w-full h-[94vh]  flex flex-row flex-wrap gap-8  justify-center overflow-y-scroll pb-[20px]' id='fixs'>
     { lodingArry.map( (A) => (
        <div className='  animate-pulse  w-[300px] h-[auto] bg-gradient-to-br from-black to-[#363333] flex flex-col rounded pb-[20px] '>
        <div className='w-full h-[auto] relative  group bg-cover '>  
   
          <div className='w-[92%] h-auto m-auto my-[10px]  rounded overflow-hidden'>
            
           <div className='w-[400px] h-[420px]'></div>
          </div>  
         </div>  
         <div className='w-[90%] h-auto m-auto'>
            <span className='text-emerald-400'></span> 
           

            
         </div>
        </div>
    )) }
    </div>
    </div>
  )
}

export default Earr