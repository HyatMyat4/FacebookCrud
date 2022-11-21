import React from 'react'
import RightSponsored from './RightSponsored'
import RightFriendsAdd from './RightFriendsAdd'
import Birthday from './Birthday'
import ContactsActive from './ContactsActive'
const HomeRight = () => {
  return (
    <div className='min-w-[360px] h-[100vh]  flex flex-col overflow-y-scroll ml-[10px]  ' id='scroolbar1'>
        <div className='w-[100%] h-[40px] flex flex-row items-center my-[5px]'>
            Sponsored
        </div>
        <RightSponsored/>        
        <div className='my-[15px] mx-[8px]  border-b border-[#68686856]'></div>
        <div>
            <div className='w-[97%] h-[40px] flex flex-row items-center justify-between'>
                <span className='font-bold '>
                    Friend requests
                </span>
                <span className='text-blue-600 text-[14px] rounded px-[8px] py-[5px] hover:bg-[#5956567d]'>
                    See All
                </span>
            </div>
        <RightFriendsAdd/>
        <div className='my-[15px] mx-[8px]  border-b border-[#68686856]'></div>

        </div>
        <Birthday/>
        <div className='my-[15px] mx-[8px]  border-b border-[#68686856]'></div>
        <ContactsActive/>
        
        

    </div>
  )
}

export default HomeRight