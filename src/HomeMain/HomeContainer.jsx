import React from 'react'
import HomeLeft from './HomeLeft'
import HomeMid from './HomeMid'
import HomeRight from './HomeRight'
const HomeContainer = () => {
  return (
    <div className='flex flex-row justify-between'>
        <HomeLeft/>
        <HomeMid/>
        <HomeRight/>
    </div>
  )
}

export default HomeContainer