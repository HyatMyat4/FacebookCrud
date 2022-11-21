import React from 'react'
import { useParams  } from 'react-router-dom'
import { parseISO , formatDistanceToNow } from 'date-fns'
import {  useOverViewDetailQuery , useOverViewVideoQuery ,  useOverViewCriditsQuery , useSimilarQuery   } from './services/BeseApi'
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { MdConstruction } from 'react-icons/md';
import { useDispatch ,  useSelector   } from 'react-redux';
import { simerCounterEngin , simerCounter ,CompiesOpenCloseEngin ,CompiesOpenClose , movietv} from './services/CouterMovieSlice'
import { useState  , useEffect , useRef } from 'react';
import{ Link } from 'react-router-dom'
const Detail = () => {
    const iframeRef = useRef(null);




    const dispatch = useDispatch()
const [allsmiler , setAllsmiler ] = useState([])
const CompiesOpenClosetrack=useSelector(CompiesOpenClose)
const lodingArry = [1,2,3,4,5,6,7,8,,9,10,11,12]
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
    const {id} =useParams()    
    console.log(id , 'is id')
    const MovieorTv = useSelector(movietv) 
    console.log(MovieorTv,'MovieorTv')
    const  Id = 1 ;
    let  pageId = useSelector(simerCounter)
    console.log(pageId ,'pageId')
    const { data: Detail , isFetching: loding , error } = useOverViewDetailQuery({ id , MovieorTv});
    const { data: Cridits  } = useOverViewCriditsQuery({ id , MovieorTv});
    const { data: Video  } = useOverViewVideoQuery({ id , MovieorTv});
console.log(Detail,'Detail')
    const { data: Similar , isFetching: Loding , haveear } =useSimilarQuery({ id , MovieorTv , pageId });

   const [realheight , setrealheight] = useState()
    

    useEffect(() => {      
      
        const Resized = () => {
            
                const   height = iframeRef?.current.offsetWidth * 9 / 16 + 'px';
                setrealheight(height)
               iframeRef?.current.setAttribute('height', height);
          
        
        }      
        if(iframeRef?.current === true){
            const   height = iframeRef?.current.offsetWidth * 9 / 16 + 'px';
            setrealheight(height)
                  iframeRef?.current.setAttribute('height', height);
        }else{
            setrealheight(400)
        } 
  

        window.addEventListener("resize",Resized);
      
    }, []);
   
    let star3 ;
let star = () => {
  star3 =( <>
<i class="fa-regular fa-star text-[gold]"></i>
<i class="fa-regular fa-star text-[gold]"></i>                 
<i class="fa-regular fa-star text-[gold]"></i> 
</>)


} 
let simlerdata ;
if(Loding){
    simlerdata = <div>is loding</div>
}else if(haveear){
    simlerdata = <div>check your internet</div>
}
let timeAgo ;
if(Detail?.release_date){
    let timestamp = Detail?.release_date
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
}

const CastsPhoto = Cridits?.cast ? Cridits?.cast.filter((castsP) => castsP.profile_path  ) : 'no have yet'

console.log(CastsPhoto)
let idCOunter = 0 
const leftright = (e) => {
    if(e === 'left' ){
        document.getElementById("castcrew-scroll").scrollLeft -= 400;
    }
    if(e === 'right' ){
        document.getElementById("castcrew-scroll").scrollLeft += 400;
    }
    if(e === 'similarLeft' ){
        document.getElementById("cards-container").scrollLeft -= 500;
    }
    if(e === 'similarRight' ){
        document.getElementById("cards-container").scrollLeft += 500;   
       if(allsmiler.length < 1){
        dispatch(simerCounterEngin(+1))
        setAllsmiler([...allsmiler , ...Similar?.results ])
       }

       if(Similar?.results.total_page  !== pageId ){
        if(idCOunter === 5){
            dispatch(simerCounterEngin(+1))
            setAllsmiler([...allsmiler , ...Similar?.results ])
           
            idCOunter = 0 
        }    
       }else{
        dispatch(simerCounterEngin(-480))
    }
    idCOunter +=1
   
    }
   
};

const goVideo = () => {
    console.log('it working')
    document.getElementById("MusicBarS24").scrollTop += 1600;
}

  return (
    <div className='scroll w-full h-[100vh] overflow-y-scroll select-none pb-[100px] overflow-hidden ' id='MusicBarS24'>
        
       <div id='gh72d' className=' relative w-full h-[auto]  flex flex-col lg:flex-row items-center justify-between'  >
    
            <div className='w-[100%] lg:w-[30%] h-full  '>
                <div className='max-w-[400px] h-[auto] m-auto my-[20px]  flex flex-col items-center justify-center rounded-[10px] overflow-hidden '>
                    <img src={  Api_originimg  + Detail?.poster_path} />
                </div>
            </div>
            <div className=' w-[97%]  lg:w-[70%] h-[auto] m-auto ml-[15px]  '>
                <div className='w-full h-[auto] flex flex-row items-center flex-wrap justify-start  '>
                    { Detail?.genres.map((type) => (
                        <span className='py-[5px] px-[10px] m-[5px]  bg-emerald-400 text-[black] rounded-full'>{type.name}</span>
                    ))}
                </div>
                <div className=' text-[20px] lg:text-[40px] font-bold'>
                    {Detail?.original_title}
                </div>
                <div className='text-yellow-400 m-[5px]'>
                    {timeAgo ? timeAgo :  'soorty no found time'}
                </div>
                <div className='text-emerald-500 m-[5px]'>
                 <span className=' text-indigo-500'>Duration : </span>    { Math.floor(  Detail?.runtime / 60 ) } hr  {  Detail?.runtime % 60  } minute
                </div>
                <div className='m-[5px] text-[18px]'> <span className='text-sky-400'>popularity : </span>

                { Math.floor(Detail?.popularity ) < 80 ? 
      <i class="fa-regular fa-star-half"></i>
        
         : Math.floor(Detail?.popularity ) < 150 ? 
         <><i class="fa-regular fa-star text-[gold]"></i>
         <i class="fa-regular fa-star text-[gold]"></i>
         </>  
         : Math.floor(Detail?.popularity ) < 300 ? 
           <>
            {star()} 
            {star3}              
           </>
         : Math.floor(Detail?.popularity ) < 500  ?
         <><i class="fa-regular fa-star text-[gold]"></i>
          {star()} 
          {star3}  
                       
         </>
         :   Math.floor(Detail?.popularity ) < 1000 ?
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
          
                </div>
                <div className='m-[5px] text-orange-400'>
                vote_count : <span className='text-emerald-500'>{Detail?.vote_count}</span> 
                </div>
                <div className='text-[#727b8a]'>
                    {Detail?.overview}
                </div>
                <div onClick={() => goVideo()} className='w-[120px] px-[10px] py-[7px] rounded-full mt-[15px] bg-orange-500 shadow-primary text-[black] cursor-pointer '>Watch Tailer</div>
            </div>
       </div>
      <div className='w-full h-[50px]  flex flex-row items-center mt-[20px] justify-around'>
        <div className='flex flex-col items-center justify-center'>
        <span onClick={() => dispatch(CompiesOpenCloseEngin(true))}
             className={`text-[16px] cursor-pointer  font-bold ${CompiesOpenClosetrack ? 'text-[#bccbe1]'  : 'text-[#858f9f]'}`}>Cast<i class="fa-solid fa-user m-[5px]"></i></span>
         {CompiesOpenClosetrack ? <i class="fa-solid fa-circle m-[5px] text-[10px] text-emerald-500"></i>: ''}
        </div>   
        <div className='flex flex-col items-center justify-center'>
        <span onClick={() => dispatch(CompiesOpenCloseEngin(false))}
            className={`text-[16px] cursor-pointer font-bold ${CompiesOpenClosetrack ?  'text-[#858f9f]' : 'text-[#bccbe1]' }`}>Companies<i class="fa-solid fa-building m-[5px]"></i></span>
         {CompiesOpenClosetrack ? ' ': <i class="fa-solid fa-circle m-[5px] text-[10px] text-emerald-500"></i> }
        </div>       
            
      </div>
      <div className='w-full h-auto py-[40px] flex flex-row justify-between border-y border-[#666565]'>
        <div id='shadow' className=' shadow-secondary w-[5%] h-[auto]   hidden md:flex left-btn text-4xl lg:text-5xl justify-end items-center text-gray-400 hover:text-gray-200'>
            <button className='w-max' onClick={(e) => leftright('left')}>
                    <BsChevronCompactLeft />     
            </button>
        </div>
        <div className='scroll w-full flex overflow-x-auto gap-3 px-5 py-3 md:px-20'  id="castcrew-scroll">
            {CompiesOpenClosetrack ? Cridits?.cast ? CastsPhoto?.map((C) => (
                <div className='group relative min-w-[200px] h-auto rounded-[10px] overflow-hidden'>
                    <div className=' group-hover:flex animate-slideup42  absolute w-full hidden flex-col items-center text-center justify-center h-full bg-[#000000aa] '>                        
                        <span className=' animate-slideup423 inset-0 text-indigo-200'>{C.character}</span>
                        <span className=' animate-slideup423  inset-0 text-pink-100'>By {C.name}</span>
                        <span className='py-[6px] px-[10px] rounded-full cursor-pointer animate-slideup423    bg-emerald-500 text-black hover:bg-emerald-400 mt-[15px]'>SeeMore</span>
                    </div>
                    <img alt='img' src={`https://image.tmdb.org/t/p/w500${C.profile_path}`}/>
                    
                </div>
              
            ))
            :  lodingArry.map(A => (
            <div className='group relative min-w-[200px] h-auto rounded-[10px] overflow-hidden'>
            <div className=' group-hover:flex animate-slideup42  absolute w-full hidden flex-col items-center text-center justify-center h-full bg-[#000000aa] '>                        
                <span className=' animate-slideup423 inset-0 text-indigo-200'></span>
                <span className=' animate-slideup423  inset-0 text-pink-100'></span>
                <span className='py-[6px] px-[10px] rounded-full cursor-pointer animate-slideup423    bg-emerald-500 text-black hover:bg-emerald-400 mt-[15px]'>SeeMore</span>
            </div>
           <div className='w-full h-[300px] animate-pulse bg-slate-300 '></div>
            
        </div>
                
            ))  
            : Detail?.production_companies.map(compy => (
                <div className='min-w-[200px] h-auto rounded-[10px] flex flex-row items-center overflow-hidden'>
                <img alt='no img found' className='max-w-[200px] text-[#39353c]' src={`https://image.tmdb.org/t/p/w500${compy.logo_path}`}/>
            </div>
            ))
            }
        </div>
        <div className='w-[5%] h-[auto] shadow-secondary hidden md:flex left-btn text-4xl lg:text-5xl justify-start items-center text-gray-400 hover:text-gray-200'>
            <button className='w-max' onClick={(e) => leftright('right')}>
                    <BsChevronCompactRight />     
            </button>
        </div>
      </div>
      <div className='w-full h-[80px]  flex flex-col items-center justify-center text-[20px] cursor-pointer text-[#858f9f] font-bold'>
         <span>SimilarMovie</span>
         <i class="fa-solid fa-circle m-[5px] text-[10px] text-emerald-500"></i>
      </div>
      <div className='w-full h-auto py-[40px] flex flex-row justify-between '>
        <div id='shadow' className=' shadow-secondary w-[5%] h-[auto]   hidden md:flex left-btn text-4xl lg:text-5xl justify-end items-center text-gray-400 hover:text-gray-200'>
            <button className='w-max' onClick={(e) => leftright('similarLeft')}>
                    <BsChevronCompactLeft />     
            </button>
        </div>
        <div className='scroll w-full flex overflow-x-auto gap-3 px-5 py-3 md:px-20'id="cards-container" >
            
        { allsmiler?.length > 1
            ? allsmiler?.map((C) => (
                <div className='group relative min-w-[200px] h-auto rounded-[10px] overflow-hidden'>
                       <div className=' group-hover:flex animate-slideup42  absolute w-full hidden flex-col items-center text-center justify-center h-full bg-[#000000aa] '>                        
                       <Link to={`/detail/${C.id}`} className='py-[7px] px-[12px] rounded-full cursor-pointer animate-slideup423    bg-emerald-500 text-black hover:bg-emerald-400'>
              See More
          </Link>
                        
                    </div>
                    <img  className='w-full h-full' src={Api_originimg + C.poster_path }/>
                </div>
              
            ))
            : Similar?.results   ? Similar?.results.map((C) => (
                <div className='group relative min-w-[200px] h-auto rounded-[10px] overflow-hidden'>
                                           <div className=' group-hover:flex animate-slideup42  absolute w-full hidden flex-col items-center text-center justify-center h-full bg-[#000000aa] '>                        
                       <Link to={`/detail/${C.id}`} className='py-[7px] px-[12px] rounded-full cursor-pointer animate-slideup423    bg-emerald-500 text-black hover:bg-emerald-400'>
              See More
          </Link>                        
                    </div>
                    <img  className='w-full h-full' src={Api_originimg + C.poster_path }/>
                </div>
                 )) :
                 lodingArry.map(A => (
                    <div className='group relative min-w-[200px] h-auto rounded-[10px] overflow-hidden'>
                    <div className=' group-hover:flex animate-slideup42  absolute w-full hidden flex-col items-center text-center justify-center h-full bg-[#000000aa] '>                        
                        <span className=' animate-slideup423 inset-0 text-indigo-200'></span>
                        <span className=' animate-slideup423  inset-0 text-pink-100'></span>
                        <span className='py-[6px] px-[10px] rounded-full cursor-pointer animate-slideup423    bg-emerald-500 text-black hover:bg-emerald-400 mt-[15px]'>SeeMore</span>
                    </div>
                   <div className='w-full h-[300px] animate-pulse bg-slate-300 '></div>
                    
                </div>
                        
                    ))  
            }
        </div>
        <div className='w-[5%] h-[auto] shadow-secondary hidden md:flex left-btn text-4xl lg:text-5xl justify-start items-center text-gray-400 hover:text-gray-200'>
            <button className='w-max' onClick={(e) => leftright('similarRight')}>
                    <BsChevronCompactRight />     
            </button>
        </div>
        
      </div>
      <div className=' w-[100%] xl:w-[40%] h-auto m-auto '>
        { Video?.results ? Video?.results.map(V => (
                <div className="video mt-[20px]">
                
                <iframe
                    src={`https://www.youtube.com/embed/${V.key}`}
                    ref={iframeRef}
                    id='videoref'
                    width="100%"
                    height={realheight}
                    title="video"
                ></iframe>
                </div>
        ))
            : ''

        }
    
      </div>
    </div>
  )
}

export default Detail
