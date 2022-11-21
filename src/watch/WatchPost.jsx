import React from 'react'
import { useState , useEffect } from 'react';
import WatchPostFooter from './WatchPostFooter'
import { useGetPopularMoviesQuery } from './services/BeseApi'
import { useSelector, useDispatch } from 'react-redux';
import { parseISO , formatDistanceToNow } from 'date-fns'
import { AddAllMovieData } from './services/CouterMovieSlice'
import { ChangeCounterEngin } from './services/CouterMovieSlice'
import { AllMovieDataC } from './services/CouterMovieSlice'
import { ChangeCounterC } from './services/CouterMovieSlice'
import { Link } from 'react-router-dom';
import { MovieTvengin } from './services/CouterMovieSlice'
import Loding from './Loding'
import Earr from './Earr'

let WatchPost = () => {

  const [allMovie , setallMovie ] = useState([])

    const AllMovieData =useSelector(AllMovieDataC)

    const pageId =useSelector(ChangeCounterC)
console.log(pageId , 'is selector')

   const dispatch = useDispatch();

   const { data: Movie , isFetching: isFetchinRelatedSongs, error } = useGetPopularMoviesQuery({pageId});

   const adddata = () => {   
        if(Movie){
            setallMovie([  ...allMovie , ...Movie?.results ])
        }
 
    dispatch(ChangeCounterEngin(1))
    }
console.log(allMovie.lenght,'is length')

  useEffect(() => {
    console.log('what')
        adddata()
  }, [])
  
    
     

    
  

   

    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
 

   /* const [AllData , setAllData ] =useState( Movie?.results    ? [ ...Movie?.results  ]  : await [ ...Movie?.results  ]   ) */
      let loding ; 
    if ( isFetchinRelatedSongs) {
     loding = (
        <div className='w-full h-full flex flex-row items-center justify-center animate-spin'>
        <i class="fa-regular fa-snowflake text-[80px] text-cyan-200"></i>
    </div>
     )   
    };



    if (error) return <Earr />;



console.log(allMovie)

 

let star3 ;
let star = () => {
  star3 =( <>
<i class="fa-regular fa-star text-[gold]"></i>
<i class="fa-regular fa-star text-[gold]"></i>                 
<i class="fa-regular fa-star text-[gold]"></i> 
</>)
} 


  return (   
    <div className=' w-full h-[94vh]  flex flex-col justify-center ' >
    <div className='w-full h-[94vh]  flex flex-row flex-wrap gap-8  justify-center overflow-y-scroll pb-[20px]' id='fixs'>
    
       { allMovie.length > 0 ?  allMovie.map((MovAll) => (
  
   
  <div className='animate-slidedown  w-[300px] h-[auto] bg-gradient-to-br from-black to-[#363333] flex flex-col rounded pb-[20px] '>
  <div className='  w-full h-[auto] relative  group bg-cover '>  
    <div className={`absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex  hidden `}>
          <Link onClick={() => dispatch(MovieTvengin('movie'))} to={`/detail/${MovAll.id}`} className='py-[7px] px-[12px] rounded-full cursor-pointer animate-slidedown2   bg-emerald-500 text-black hover:bg-emerald-400'>
              See More
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
Movie?.results.map((MovAll) => (
  <div className='animate-slidedown w-[300px] h-[auto] bg-gradient-to-br from-black to-[#363333] flex flex-col rounded pb-[20px] '>
  <div className='w-full h-[auto] relative  group bg-cover '>  
    <div className={`absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex  hidden `}>
    <Link onClick={() => dispatch(MovieTvengin('movie'))} to={`/detail/${MovAll.id}`} className='py-[7px] px-[12px] rounded-full cursor-pointer animate-slidedown2   bg-emerald-500 text-black hover:bg-emerald-400'>
              See More
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
       <div className='w-full h-[50px] flex flex-row items-center justify-center '>
       <button
       onClick={() => adddata() }
       
       className='w-[200px] h-[40px] bg-[red] hover:to-[#1ebf6c]  rounded-full '>Load More</button>
       </div>
     </div>  
     </div>
  )
}


export default WatchPost