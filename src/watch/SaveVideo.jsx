import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore,{ Autoplay } from 'swiper';
import {useGetPopularMoviesQuery} from './services/BeseApi'
import {useGetTvQuery} from './services/BeseApi'
import {useVideoFoundQuery} from './services/BeseApi'
import {useUpComingQuery} from './services/BeseApi'
import { MovieTvengin } from './services/CouterMovieSlice'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "./style.css";
import { FreeMode } from 'swiper';

// import required modules

const SaveVideo = () => {
  const dispatch = useDispatch()
  const value = 'Naruto'
  const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
  const pageId = 1
  const { data: Movie , isFetching: isFetchinRelatedSongs, error } = useGetPopularMoviesQuery({pageId});
  const { data: Tv  } = useGetTvQuery({pageId});
  const { data: upComing  } = useUpComingQuery({pageId});
  const { data: SearchVideo  } = useVideoFoundQuery({ value , pageId});
  console.log(Movie)
  const MoviePoster = SearchVideo?.results.filter((Movie) => Movie.backdrop_path && Movie.popularity > 25 && Movie.vote_count > 25 )
  
  return (
    <div className='w-[100%] 4se:w-[78%] h-[100vh]  m-auto overflow-y-scroll  ' id='watchScrool'>
      <Swiper
                loop={true}
                modules={[Autoplay ]}
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={1}   
                    
                autoplay={{delay: 2000}}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                    
                  },
                  768: {
                    slidesPerView: 2,
                   
                  },
                  1224: {
                    slidesPerView: 3,
                    
                  },
                  1500: {
                    slidesPerView: 3,
                    
                  },
                  1610: {
                    slidesPerView: 4,
                    
                  },
              
                }}
                className="mySwiper"
      >
        {
          Movie?.results.map((Movie) => (
            <SwiperSlide key={Movie?.id} className='animate-slidedown min-w-[300px] h-full  flex flex-wrap select-none'>
               <Link onClick={() => dispatch(MovieTvengin('movie'))}  to={`/detail/${Movie.id}`}>
              <img alt='' src={Api_originimg + Movie.poster_path} />
              </Link>
            </SwiperSlide>
          ))
        }            
        
      </Swiper>
      <Swiper
         loop={true}
         modules={[Autoplay]}
         grabCursor={true}         
         spaceBetween={20}
         slidesPerView={2}        
         autoplay={{delay: 3000}}             
          
            
         style={{ width: '100%', height: '300px' , }}
         className=" shadow-lg  animate-slideright"
      >
           {MoviePoster?.map((M) =>  (
              
        <SwiperSlide key={M.id} className='min-w-[400px] h-[300px]' >        
              <Link onClick={() => dispatch(MovieTvengin('movie'))}  to={`/detail/${M.id}`}>   
              <img alt='' className='background-img w-full h-full' src={Api_originimg + M.backdrop_path} />    
              </Link>                                   
                            
        </SwiperSlide>  
          
        ))}
      </Swiper>
      <Swiper
                loop={true}
                modules={[Autoplay ]}
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={1}   
                    
                autoplay={{delay: 2000}}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                    
                  },
                  768: {
                    slidesPerView: 2,
                   
                  },
                  1224: {
                    slidesPerView: 3,
                    
                  },
                  1500: {
                    slidesPerView: 3,
                    
                  },
                  1610: {
                    slidesPerView: 4,
                    
                  },
              
                }}
                className="mySwiper"
      >
        {
          upComing?.results.map((Movie) => (
           
           <SwiperSlide key={Movie?.id} className=' animate-slidedown min-w-[300px] h-full  flex flex-wrap select-none'>
              <Link onClick={() => dispatch(MovieTvengin('movie'))}  to={`/detail/${Movie.id}`}>
              <img alt='' src={Api_originimg + Movie.poster_path} />
              </Link>
            </SwiperSlide>
         
          ))
        }            
        
      </Swiper>
      <Swiper
         loop={true}
         modules={[Autoplay]}
         grabCursor={true}         
         spaceBetween={20}
         slidesPerView={1}        
         autoplay={{delay: 3000}}             
          
            
         style={{ width: '100%', height: 'auto' , }}
         className=" shadow-lg  animate-slideright"
      >
           {Tv?.results.map((M) =>  (
              
        <SwiperSlide key={M.id} className='min-w-[400px] h-[auto]' >        
             <Link onClick={() => dispatch(MovieTvengin('tv'))}  to={`/detail/${M.id}`}>     
              <img alt='' className='background-img w-full h-full' src={Api_originimg + M.backdrop_path} />   
              </Link>                                   
                            
        </SwiperSlide>  
          
        ))}
      </Swiper>
    </div>
  )
}

export default SaveVideo