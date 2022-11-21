import React from 'react'

const RightFriendsAdd = () => {
  return (
    <div>
            <div className='w-[100%] h-[auto] flex flex-row '>
                <div className=' w-[70px] h-[100%]'>
                    <img src='	https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg'
                        className='w-[60px] rounded-full'
                    />
                </div>
                <div className='w-[75%] flex flex-col '>
                  <div className='w-[100%]  flex flex-row justify-between mb-[5px]'>  
                    <span>Olivia</span>
                    <span>3 hr</span>
                  </div>  
                  <div className='w-[100%] flex  flex-row  '>
                    <img src='https://media.herworld.com/public/2020/07/kbeauty-hack-contour-korean-women-1-768x768.jpg?compress=true&quality=80&w=480&dpr=2.6'
                        className='w-[18px] h-auto rounded-full mr-[10px]'
                    />
                    <span className='text-[12px] text-stone-300'>1 mutal friends</span>
                  </div>
                  <div className='w-[100%] h-[auto] flex flex-row mt-[10px]'>
                        <button className='bg-[#006cfa] w-[49%] h-[35px] rounded mr-[10px] ml-[5px] hover:bg-[#2a79e0]'>Confirm</button>
                        <button className='bg-[#4c4e4e] w-[49%] h-[35px] rounded hover:bg-[#646666]'>Delete</button>
                  </div>
                </div>                
            </div>
    </div>
  )
}

export default RightFriendsAdd