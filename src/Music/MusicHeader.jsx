import React from 'react'

const MusicHeader = () => {
  return (
    <div className='w-[100%] h-[55px] flex flex-row items-center justify-between'>
    <div>
        <div className='  w-full h-auto flex flex-row  '>
            <i className="fa-solid fa-bars text-[27px] ml-[15px] mr-[10px] text-orange-600"></i>
            <div className=' hidden md:inline animate-slideleft  text-fuchsia-600 ml-[5px] py-[5px] px-[10px] bg-gradient-to-br from-black to-[#1e29bf] rounded-full'>
                <i className="fa-solid fa-music text-[20px] mr-[5px]"></i>
                <span className='text-teal-400'>FaceBookMusic <i className="fa-solid fa-headphones text-[20px] text-blue-400"></i></span>
            </div>
        </div>
    </div>
        <div className='w-[450px] h-[auto] animate-slideup'>
            <div className=' w-[100%] h-[40px]   flex flex-row items-center rounded-full bg-gradient-to-br from-black to-[#1e29bf] overflow-hidden  '>
              <input 
              className='w-[86%] h-[39px] px-[13px] outline-none rounded-full bg-transparent '
              type='text'
              placeholder='Search'
              
              
              />
              <i class="fa-solid fa-magnifying-glass text-[19px] p-[30px] bg-blue-900 hover:bg-blue-800 text-teal-400 cursor-pointer  "></i>
            </div>
        </div>

       <div className='  hidden lg:inline'>
          <div className='mr-[15px]'>
             <i class="fa-solid fa-bell text-[23px] text-rose-600 "></i>
             <span className='text-[13px] text-green-500 '>9+ </span>

             <i class="fa-solid fa-compact-disc ml-[10px] text-[20px] text-blue-500"></i>
          </div>
       </div>


      
    </div>
  )
}

export default MusicHeader