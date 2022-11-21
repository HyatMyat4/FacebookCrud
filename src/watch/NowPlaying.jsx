import React from 'react'
import WatchPostFooter from './WatchPostFooter'
import { useGetNowPlayingQuery } from './services/BeseApi'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeCounterEngin2 } from './services/CouterMovieSlice'
import { ChangeCounter2 , MovieTvengin } from './services/CouterMovieSlice'
import { useState , useEffect } from 'react'
import Earr from './Earr'
import Loding from './Loding'
import { Link } from 'react-router-dom'
const NowPlaying = () => {
  const dispatch = useDispatch()
  const pageId = useSelector(ChangeCounter2)
  
  const [ alldata , setalldata ] = useState([])
  const { data: NowPlaying  , isFetching: isFetchinRelatedSongs, error } = useGetNowPlayingQuery({pageId});



  const adddata =  () => { 
    dispatch(ChangeCounterEngin2(1))
      
   if(NowPlaying){
      setalldata([ ...alldata , ...NowPlaying?.results])
    }  
  
  }




  let isloding ;
  if ( isFetchinRelatedSongs) {   
    isloding =(  <div className='w-full h-full flex flex-row items-center justify-center animate-spin'>
    <i class="fa-regular fa-snowflake text-[80px] text-cyan-200"></i>
</div> )
}

useEffect(() => {
  console.log('what')
      adddata()
      
}, [] )

  const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
 


   if (error) return <Earr />;


  return (
    <div className='w-full h-screen overflow-y-scroll pb-[40px]' id='MusicBarS'>
      {isloding}
    { alldata.length > 0 ?  alldata.map((Playing) => (   
    <div key={Playing.id}  className=' animate-slideup max-w-[900px] h-auto  m-auto mt-[20px]  rounded-[7px] overflow-hidden '>
    <div className='bg-[#242526] max-w-[900px] h-auto    '>
        <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto ]'>
    <div className='flex flex-row'>
        <div className='' >
            <img className='rounded-full mr-[8px] w-[40px] h-auto'
            src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg'
            />
        </div>
        <div className='flex flex-col'>
            <span>Replubic of Movie  </span>
            <span className='text-[13px] text-gray-400'>2 yer Ago<i class="fa-solid fa-earth-asia ml-[5px]"></i></span>
        </div>
    </div>
    <div>
        <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
    </div>
</div>
<div className='w-[96%] h-auto b m-auto pb-[10px] '>
{Playing.overview}
<span className='text-emerald-400'>{`[${Playing.title}]`}</span>
</div>
</div>
   <div className=' relative w-[100%] h-auto  bg-[#242526] m-auto group '>
<div className=' absolute w-full h-full   bg-[#00000077] hidden group-hover:inline'>
      <span className='w-full h-full  flex flex-col items-center justify-center  '>
      <Link onClick={() => dispatch(MovieTvengin('movie'))} to={`/detail/${Playing.id}`} className='py-[8px] px-[14px] animate-slidedown2 bg-[red] rounded-full text-[15px] select-none cursor-pointer'>See More</Link>
        </span>
    </div> 

       <img 
         
       className='w-auto h-auto m-auto bg-cover ' 
       src={Api_originimg + Playing.backdrop_path} />
   </div>
   <WatchPostFooter MovieView={Playing.popularity} comment={Playing.vote_count} reaction={Playing.vote_average}/>
</div>

   )) : 
   NowPlaying?.results.map((Playing) => (   
<div key={Playing.id}  className='animate-slideup max-w-[900px] h-auto  m-auto mt-[20px]  rounded-[7px] overflow-hidden '>
    <div className='bg-[#242526] max-w-[900px] h-auto    '>
        <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto ]'>
    <div className='flex flex-row'>
        <div >
            
            <img className='rounded-full mr-[8px] w-[40px] h-auto'
            src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg'
            />
        </div>
        <div className='flex flex-col'>
            <span>Replubic of Movie  </span>
            <span className='text-[13px] text-gray-400'>2 yer Ago<i class="fa-solid fa-earth-asia ml-[5px]"></i></span>
        </div>
    </div>
    <div>
        <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
    </div>
</div>
<div className='w-[96%] h-auto b m-auto pb-[10px] '>
{Playing.overview}
<span className='text-emerald-400'>{`[${Playing.title}]`}</span>
</div>
</div>
   <div className=' relative w-[100%] h-auto  bg-[#242526] m-auto group'>
   <div className=' absolute w-full h-full   bg-[#00000077] hidden group-hover:inline'>
      <span className='w-full h-full  flex flex-col items-center justify-center  '>
      <Link onClick={() => dispatch(MovieTvengin('movie'))} to={`/detail/${Playing.id}`} className='py-[8px] px-[14px] animate-slidedown2 bg-[red] rounded-full text-[15px] select-none cursor-pointer'>See More</Link>
        </span>
    </div> 
       <img 
         
          
       className='w-auto h-auto m-auto bg-cover ' 
       src={Api_originimg + Playing.backdrop_path} />
   </div>
   <WatchPostFooter MovieView={Playing.popularity} comment={Playing.vote_count} reaction={Playing.vote_average}/>
</div> 

   ))
   }
          <div className='flex flex-row items-center justify-center'>
       <button
      onClick={() => adddata()}
       className='w-[200px] h-[40px]  bg-gradient-to-br from-black to-[#bc1ebf] mt-[30px] mb-[50px] rounded hover:to-[#bf1e66]   '>Load More</button>
       </div>
   
     </div>
  )
}

export default NowPlaying