import SongCard from '../SongCard'
import Earr from '../Earr'
import Loder from '../Loder'
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { OpeNClose } from '../servicesApi/PlayerSlice'
import PlayPause from '../PlayPause';
import { playPause, setActiveSong } from '../servicesApi/PlayerSlice';


import 'swiper/css';
import 'swiper/css/free-mode';

import { useGetTopChartsQuery } from '../servicesApi/MusicBaseApi'

const TopCharts = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-[14px]  text-white">
              {song?.title}
            </p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-[13px] text-gray-300 mt-1">
              {song?.subtitle}
            </p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
  
  const TopPlay = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data } = useGetTopChartsQuery();
    const divRef = useRef(null);
  console.log(data , 'is data')
    useEffect(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  
    const topPlays = data?.slice(0 , 31);
  
    const handlePauseClick = () => {
      dispatch(playPause(false));
      dispatch(OpeNClose(false))
    };
  
    const handlePlayClick = (song, i) => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
      dispatch(OpeNClose(true))
    };
  
    return (
      <div ref={divRef} className="xl:ml-6 ml-0  xl:max-w-[500px] max-w-full flex flex-col">
                <div className="w-full flex flex-col mt-8 mb-[20px]">
        { topPlays ?  <div className="flex flex-row justify-between items-center">
            <h2 className="font-bold text-2xl text-green-500 animate-bounce ">Top Artists</h2>
            <Link to="/top-artists">
              <p className="text-black text-base cursor-pointer py-[2px] px-[5px] bg-green-500 rounded mr-[10px]">See more</p>
            </Link> 
          </div> : ''
            }
  
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4 w-full"
          >
            {topPlays?.map((artist) => (
              <SwiperSlide
                key={artist?.key}
                style={{ width: '25%', height: 'auto' }}
                className=" shadow-lg rounded-full animate-slideright"
              >
                <Link to={`/artists/${artist?.artists[0].adamid}`}>
                  <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex flex-col">
         { topPlays ? <div className="flex flex-row justify-between items-center">
            <h2 className=" font-bold text-2xl ml-[10px] text-rose-600 animate-bounce  ">Top Charts</h2>
            <Link to="/top-charts">
              <p className="text-gray-300 text-base cursor-pointer mr-[10px] py-[2px] px-[5px] bg-rose-600 rounded">See more</p>
            </Link>
          </div> : ''
  }
          <div className="mt-4 flex flex-col gap-1">
            {topPlays?.map((song, i) => (
              <TopCharts
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            ))}
          </div>
        </div>
  

      </div>
    );
  };

export default TopPlay