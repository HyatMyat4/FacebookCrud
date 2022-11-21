import React from 'react'
import { useGetTvQuery } from './services/BeseApi'
import { ChangeCounterEngin3 } from './services/CouterMovieSlice'
import { showCounter3 , MovieTvengin} from './services/CouterMovieSlice'
import { useDispatch ,  useSelector    } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Shows = () => {
  const [alltv , setalltv ] = useState([])
  const dispatch = useDispatch()
    let pageId = useSelector(showCounter3) ;
    console.log(pageId , ' is show if')
    const { data: Tv , isFetching: isFetchinRelatedSongs, error } = useGetTvQuery({pageId});
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
    console.log(Tv)

const allAdd = () => {
  dispatch(ChangeCounterEngin3(1))
  if(Tv){
    setalltv([ ...alltv  ,...Tv?.results])
  }
}
    
let star3 ;
    let star = () => {
      star3 =( <>
  <i class="fa-regular fa-star text-[gold]"></i>
  <i class="fa-regular fa-star text-[gold]"></i>                 
  <i class="fa-regular fa-star text-[gold]"></i> 
  </>)
} 
  return (
   
    <div className=' w-full h-[94vh]  flex flex-row flex-wrap gap-8  justify-center overflow-y-scroll pb-[20px]' id='fixs'>
        { alltv.length > 0 ?
        alltv.map((tv) => (
        <div className='animate-slidedown w-[300px] h-[auto] bg-gradient-to-br from-black to-[#363333] flex flex-col rounded pb-[20px] '>
        <div className='w-full h-[auto] relative  group bg-cover '>  
          <div className={`absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex hidden `}>
          <Link onClick={() => dispatch(MovieTvengin('tv'))}  to={`/detail/${tv.id}`} className='py-[7px] px-[12px] rounded-full cursor-pointer animate-slidedown2  bg-emerald-500 text-black hover:bg-emerald-400'>See More</Link>
          </div>
          <div className='w-[92%] h-auto m-auto my-[10px]  rounded overflow-hidden'>
            <img className='w-[auto] h-auto bg-cover ' src={ Api_originimg + tv.poster_path} />
          </div>  
         </div>  
         <div className='w-[90%] h-auto m-auto'>
            <span className='text-emerald-400'>{tv.original_name}</span> 
            <div className=''>
             popularity : <span className='text-yellow-400'>  
             { Math.floor(tv.popularity ) < 80 ? 
            <i class="fa-regular fa-star-half"></i>
              
               : Math.floor(tv.popularity ) < 150 ? 
               <><i class="fa-regular fa-star text-[gold]"></i>
               <i class="fa-regular fa-star text-[gold]"></i>
               </>  
               : Math.floor(tv.popularity ) < 300 ? 
                 <>
                  {star()} 
                  {star3}              
                 </>
               : Math.floor(tv.popularity ) < 500  ?
               <><i class="fa-regular fa-star text-[gold]"></i>
                {star()} 
                {star3}  
                             
               </>
               :   Math.floor(tv.popularity ) < 1000 ?
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
        ))
      :  Tv?.results.map((tv) => (
        <div className='animate-slidedown w-[300px] h-[auto] bg-gradient-to-br from-black to-[#363333] flex flex-col rounded pb-[20px] '>
        <div className='w-full h-[auto] relative  group bg-cover '>  
          <div className={`absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex hidden `}>
          <Link onClick={() => dispatch(MovieTvengin('tv'))}  to={`/detail/${tv.id}`} className='py-[7px] px-[12px] rounded-full cursor-pointer animate-slidedown2  bg-emerald-500 text-black hover:bg-emerald-400'>See More</Link>
          </div>
          <div className='w-[92%] h-auto m-auto my-[10px]  rounded overflow-hidden'>
            <img className='w-[auto] h-auto bg-cover ' src={ Api_originimg + tv.poster_path} />
          </div>  
         </div>  
         <div className='w-[90%] h-auto m-auto'>
            <span className='text-emerald-400'>{tv.original_name}</span> 
            <div className=''>
             popularity : <span className='text-yellow-400'>  
             { Math.floor(tv.popularity ) < 80 ? 
            <i class="fa-regular fa-star-half"></i>
              
               : Math.floor(tv.popularity ) < 150 ? 
               <><i class="fa-regular fa-star text-[gold]"></i>
               <i class="fa-regular fa-star text-[gold]"></i>
               </>  
               : Math.floor(tv.popularity ) < 300 ? 
                 <>
                  {star()} 
                  {star3}              
                 </>
               : Math.floor(tv.popularity ) < 500  ?
               <><i class="fa-regular fa-star text-[gold]"></i>
                {star()} 
                {star3}  
                             
               </>
               :   Math.floor(tv.popularity ) < 1000 ?
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
        ))
      }
               <div className='w-full h-[50px] flex flex-row items-center justify-center '>
       <button
       onClick={() => allAdd() }       
       className='w-[200px] h-[40px] bg-[red]   rounded-full '>Load More</button>
       </div>
    </div>
    
    
  )
}

export default Shows