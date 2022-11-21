import React from 'react'
import { useVideoFoundQuery } from './services/BeseApi';
import { useSelector , useDispatch } from 'react-redux';
import { searchValue } from './services/CouterMovieSlice'
import { SearchCounterEngin } from './services/CouterMovieSlice'
import { SearchCounter , MovieTvengin } from './services/CouterMovieSlice'
import { Link } from 'react-router-dom';
const SearchPage = () => {
  const dispatch = useDispatch()
  const pageId = useSelector(SearchCounter)
  const value = useSelector(searchValue)
  
  const { data: SearchVideo  , 
    isFetching: isloding, 
    error } = useVideoFoundQuery({ value , pageId});
  
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 

    let star3 ;
let star = () => {
  star3 =( <>
<i class="fa-regular fa-star text-[gold]"></i>
<i class="fa-regular fa-star text-[gold]"></i>                 
<i class="fa-regular fa-star text-[gold]"></i> 
</>)
} 

let loding ; 
if ( isloding ) {
 loding = (
    <div className='w-full h-full flex flex-row items-center justify-center animate-spin'>
    <i class="fa-regular fa-snowflake text-[80px] text-cyan-200"></i>
</div>
 )   
};
const PrevNextPage = (e) => {
  if(e === 'prev' ){
    if(SearchVideo?.page > 1 ){
      dispatch(SearchCounterEngin(-1))

    }   
  }else if(e === 'next' ) {   
    if(SearchVideo?.total_pages > pageId ){
      dispatch(SearchCounterEngin(+1))
    
    }
  
  }
}
  return (
    <div className='w-full h-[94vh]  flex flex-col justify-center '>
    <div className='w-full h-[94vh]  flex flex-row flex-wrap gap-8  justify-center overflow-y-scroll pb-[20px]' id='fixs' >
    <div className='w-[90%] h-auto xs:h-[60px] select-none  flex flex-col xs:flex-row  items-center justify-between m-auto'>
      <div className=' mt-[20px] xs:mt-0'>
          <span className='text-[gold]'>
            Total results / <span className='text-[white] text-[18px]'>{SearchVideo?.total_results}</span>
          </span>
      </div>
      <div className=' mt-[20px] xs:mt-0'>
          <span className='text-[white]  text-[18px] mr-[8px]'>
            {SearchVideo?.page} / <span className=''>{SearchVideo?.total_pages}</span>
          </span>
          <span onClick={()=> PrevNextPage('prev')} className='py-[5px] cursor-pointer hover:bg-orange-600 px-[18px] bg-[orange] text-[black] rounded-full '>Prev</span>
          <span onClick={()=> PrevNextPage('next')} className='py-[5px] cursor-pointer hover:bg-orange-600 px-[18px] bg-[orange] text-[black] rounded-full ml-[10px] '>Next</span>
      </div>
    </div>
       { SearchVideo?.length > 0 ?  SearchVideo.map((MovAll) => (
  
   
  <div key={MovAll.id} className='w-[300px] h-[auto] bg-gradient-to-br from-black to-[#1e2bbf] flex flex-col rounded pb-[20px] '>
  <div className='w-full h-[auto] relative  group bg-cover '>  
    <div className={`animate-slideup423 absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex hidden `}>
    <Link onClick={() => dispatch(MovieTvengin('movie'))}  to={`/detail/${MovAll.id}`}> 
          <span className='py-[7px] px-[12px] rounded-full cursor-pointer  bg-emerald-500 text-black hover:bg-emerald-400'>See More</span>
    </Link>
    </div>
    <div className='w-[92%] h-auto m-auto my-[10px]  rounded overflow-hidden'>
      
      <img className='w-[full] h-[420px] bg-cover '  

      src={ Api_originimg + MovAll.poster_path} />
    </div>  
   </div>  
   <div className='w-[90%] h-auto m-auto'>
      <span className='text-emerald-400'>{MovAll.title}</span> 
     
      <div className=''>
       popularity : <span className='text-yellow-400'>  
       { Math.floor(MovAll.popularity ) < 80 ? 
      <i class="fa-regular fa-star-half"></i>
        
         : Math.floor(MovAll.popularity ) < 150 ? 
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         </>  
         : Math.floor(MovAll.popularity ) < 300 ? 
           <>
            {star()} 
            {star3}              
           </>
         : Math.floor(MovAll.popularity ) < 500  ?
         <><i class="fa-regular fa-star text-[gold]"></i>
          {star()} 
          {star3}  
                       
         </>
         :   Math.floor(MovAll.popularity ) < 1000 ?
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         {star()} 
         {star3}  
          </>
         : 
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>                 
         {star()}                   
         {star3}                   
         </>            
          }
           
       </span>
       
      </div>
      
   </div>
  </div>
)
) : 
SearchVideo?.results.map((MovAll) => (
  <div key={MovAll.id} className='w-[300px] h-[auto] bg-gradient-to-br from-black to-[#1e2bbf] flex flex-col rounded pb-[20px] '>
  <div className='w-full h-[auto] relative  group bg-cover '>  
    <div className={` animate-slideup422 absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex hidden `}>
    <Link onClick={() => dispatch(MovieTvengin('movie'))}  to={`/detail/${MovAll.id}`}>
          <span className='  animate-slideup423 py-[7px] px-[12px] rounded-full cursor-pointer  bg-emerald-500 text-black hover:bg-emerald-400'>See More</span>
    </Link> 
    </div>
    <div className='w-[92%] h-auto m-auto my-[10px]  rounded overflow-hidden'>
      
      <img className='w-[full] h-[420px] bg-cover '  

      src={ Api_originimg + MovAll.poster_path} />
    </div>  
   </div>  
   <div className='w-[90%] h-auto m-auto'>
      <span className='text-emerald-400'>{MovAll.title}</span> 
     
      <div className=''>
       popularity : <span className='text-yellow-400'>  
       { Math.floor(MovAll.popularity ) < 80 ? 
      <i class="fa-regular fa-star-half"></i>
        
         : Math.floor(MovAll.popularity ) < 150 ? 
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         </>  
         : Math.floor(MovAll.popularity ) < 300 ? 
           <>
            {star()} 
            {star3}              
           </>
         : Math.floor(MovAll.popularity ) < 500  ?
         <><i class="fa-regular fa-star text-[gold]"></i>
          {star()} 
          {star3}  
                       
         </>
         :   Math.floor(MovAll.popularity ) < 1000 ?
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         {star()} 
         {star3}  
          </>
         : 
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>                 
         {star()}                   
         {star3}                   
         </>            
          }
           
       </span>
       
      </div>
      
   </div>
  </div>
   
   
)
)
}



{loding}

     </div>  
     </div>
  )
  
}

export default SearchPage